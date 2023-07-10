import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  console.log("Connecting with Mongodb...");
  try {
    const connection = await mongoose.connect(
      `mongodb://127.0.0.1:27017/batch`
    );

    console.log(
      `DB connected to DB named ${connection.connection.name} at host: ${connection.connection.host}`
    );
  } catch (e) {
    console.log("DB Not Connected", e);
  }
};
