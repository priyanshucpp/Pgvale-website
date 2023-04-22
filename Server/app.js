require("dotenv").config();
require("express-async-errors");
const express = require("express");
const db = require("./db/index");
const app = express();

// router imports
// const authRouter = require("./routes/auth");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
// extra packages

// routes
// app.use("/api/v1/auth", authRouter);

app.get("/tenents", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM tenents");
    res.json(data.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
