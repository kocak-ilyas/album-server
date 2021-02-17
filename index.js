import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// const PORT = 4000 || 5000;
// const PORT = process.env.server_port || 5000;

//
app.get("/", (req, res) => {
  res.send("Server API is Running");
});
//
const CONNECTION_URL = `mongodb+srv://album:wZ7JJ98D0SDi8jVV@cluster0.tk2q6.mongodb.net/albumDB?retryWrites=true&w=majority`;
// const CONNECTION_URL = `mongodb+srv://${process.env.mongoDB_user}:${process.env.mongoDB_key}@cluster0.tk2q6.mongodb.net/${process.env.mongoDB_dataBase}?retryWrites=true&w=majority`;


mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  // .then(() =>app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
