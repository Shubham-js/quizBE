require("dotenv").config();
import express from "express";
import connectToDB from "./db";
const app = express();
const port = process.env.PORT || 3000;
import router from "./routes";

(async () => {
  const db = await connectToDB();
  app.use("/", router);

  // Add your routes and application logic here
  // For example:
  app.get("/users", async (req, res) => {
    const users = await db.collection("users").find().toArray();
    res.json(users);
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
})();
