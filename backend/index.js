const express = require("express");
const indexRouter = require("./routes/index.router.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(400).send(err);
});

app.listen(3000, () => console.log("Application listening on port: " + 3000))

