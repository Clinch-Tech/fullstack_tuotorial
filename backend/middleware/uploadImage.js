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

    const upload = multer({
      storage: storage,
      fileFilter: (req, file, cb) => {
        if (file.mimetype !== "image/png") {
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
      console.log(req.files.image[0]);

      if (req.files.image[0]) {
        let result = await uploadFromBuffer(req.files.image[0]);
        req.body.image = result.secure_url;
        console.log("result of image", result);
      }

      if (req.files.profile_image[0]) {
        const result_profile = await uploadFromBuffer(
          req.files.profile_image[0]
        );
        req.body.profile_image = result_profile.secure_url;
        console.log("result of profile image", result_profile);
      }

      if (req.files.gallery) {
        const gallery_images = [];
        req.files.gallery.map(async (gallery_image) => {
          const g_result = await uploadFromBuffer(gallery_image);
          gallery_images.push(g_result.secure_url);
        });
      }

      next();
    } catch (e) {
      res.send(e);
    }
  };

  // upload to cloud
  return [multerParse(), cloudinaryUpload];
};

export default uploadImage;

// function() ---> [ function() --> middlerware(upload), middleware ]
