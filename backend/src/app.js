import express from "express";

const app = express();

app.get('/', (req, res) => {
  console.log("ROOT HIT");
  res.send("BFF is running!");
})

export default app;