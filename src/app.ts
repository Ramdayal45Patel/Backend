import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import dbConnection from "./dbConnection/mongodb";
import routes from "./modules/users/routes";
dotenv.config();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(routes)

app.listen(port, async () => {
  await dbConnection();
  console.log(`Server is running at ${port}`);
});
