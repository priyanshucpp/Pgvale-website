require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const db = require("./db/index");
const app = express();

// router imports
// const authRouter = require("./routes/auth");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
app.use(cors());
// extra packages

// routes
// app.use("/api/v1/auth", authRouter);

app.get("/tenent", async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM tenents");
    res.json(data.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.post("/tenent", async (req, res) => {
  try {
    const { phone_no, first_name, last_name, gender, email, location } =
      req.body;

    const text =
      "INSERT INTO tenents (phone_no, first_name, last_name, gender, email, location) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [phone_no, first_name, last_name, gender, email, location];
    const newTenent = await db.query(text, values);

    res.json({ "Tenent Created": newTenent.rows });
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
