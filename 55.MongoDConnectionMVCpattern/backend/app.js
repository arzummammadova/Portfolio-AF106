import express from 'express';
import "dotenv/config";
import "./src/db/dbConnection.js";  
import studentRouter from './src/routes/studentRouter.js';

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use("/api/students", studentRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
