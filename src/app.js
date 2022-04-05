const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

require("./db/index");
require("./models/user");
const port = process.env.PORT || 3000;

const userRouter = require("./routers/user");

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("env:", process.env.PG_URL);
});