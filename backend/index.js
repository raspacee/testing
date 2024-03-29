const express = require("express");
const indexRouter = require("./routes/index.router.js");

const app = express();

// New comment  in backen

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(400).send(err);
});

app.listen(3000, () => console.log("Application listening on port: " + 3000))

app.get(()=>setInterval(3000))