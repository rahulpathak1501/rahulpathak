import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
// import path from path;

dotenv.config();

const password = process.env.VITE_CONTACTFORM_PASSWORD;

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "testingperposeemail@gmail.com",
    pass: password,
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "testingperposeemail@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Failed to send message");
    }
    res.status(200).send("Message sent successfully");
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
