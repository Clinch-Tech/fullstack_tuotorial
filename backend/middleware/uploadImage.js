import multer from "multer";
import cloudinary from "cloudinary";
import streamifier from "streamifier";
import { failureHandler } from "../response.handler.js  ";

// api keys must be inside of .env which should be git ignored
cloudinary.config({
  cloud_name: "minoprojec",
  api_key: "588678837162278",
  api_secret: "xf_oqN3DQ2_yWhC3Siu_GEo2Mhc",
  secure: true,
});

const uploadImage = (folder = "all") => {
  const multerParse = () => {
    const storage = multer.memoryStorage();

    const supported = ["image/png", "image/jpg", "image/jpeg", "image/webp"];

    const upload = multer({
      storage: storage,
      fileFilter: (req, file, cb) => {
        if (!supported.includes(file.mimetype)) {
          return cb("Not supporteds", false);
        }
        return cb(null, true);
      },
    }).fields([
      { name: "image", maxCount: 1 },
      { name: "profile_image", maxCount: 1 },
      { name: "gallery", maxCount: 5 },
    ]);

    return upload;
  };

  const cloudinaryUpload = async (req, res, next) => {
    let uploadFromBuffer = (image) => {
      return new Promise((resolve, reject) => {
        let cld_upload_stream = cloudinary.v2.uploader.upload_stream(
          {
            folder,
          },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );

        streamifier.createReadStream(image.buffer).pipe(cld_upload_stream);
      });
    };

    try {
      if (req.files.image && req.files.image[0]) {
        let result = await uploadFromBuffer(req.files.image[0]);
        req.body.image = result.secure_url;
      }

      if (req.files && req.files.profile_image && req.files.profile_image[0]) {
        const result_profile = await uploadFromBuffer(
          req.files.profile_image[0]
        );
        req.body.profile_image = result_profile.secure_url;
      }

      if (req.files.gallery) {
        let gallery_images = [];
        let gallery_images_promise = [];

        const start = performance.now();

        for (let i = 0; i < req.files.gallery.length; i++) {
          console.log("from inside of req.file.gallery for");

          gallery_images_promise.push(uploadFromBuffer(req.files.gallery[i]));
        }
        const images = await Promise.all(gallery_images_promise);
        console.log("after uploading", images);

        gallery_images = images.map((e) => e.secure_url);

        // console.log("gallery_images, gallery_images", gallery_images);
        console.log("time elapsed is: ", performance.now() - start);

        req.body.gallery = gallery_images;
      }
      console.log("from next block");

      next();
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  };

  // upload to cloud
  return [multerParse(), cloudinaryUpload];
};

export default uploadImage;

// function() ---> [ function() --> middlerware(upload), middleware ]
