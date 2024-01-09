// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(app.listen(process.env.PORT) || 8000, () => {
    console.log(`App is running at port : ${process.env.PORT || 8000}`);
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });

///Assignment Done///
app.on("error", (error) => {
  console.log("Error:", error);
  throw error;
});

/*
// A way to connect DB in this file itself
import { express } from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
})();
*/
