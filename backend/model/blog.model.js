import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      minLength: 5,
      required: true,
    },

    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    coverImage: {
      type: String,
      required: false,
    },
    galleryImage: [
      {
        type: String,
        required: false,
      },
    ],

    tags: { type: [String], required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", userSchema);
export default Blog;

// Blog                Category

// phawa lake              boating, sight seeing
// Annapurna Camp          camping, mountaineering, hiking
// Ghandruk                hiking

// // embedded
// [1,2]                   [1] [1]
// [3,4,5]                 [2] [2] [2,3]
// [5]

// // 16MB max capacity

// // relationship by reference
//           Junction table/associative entity/ join table

//           id blog category
//           1   1         1
//           2   1         2
//           3    2        3
//           4    2        4
//           5    2        5
//           5    3        5
