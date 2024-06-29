import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
const port = 3000;

const userPassword = "ILoveProgramming";

app.get("/", (req, res) => {
  console.log(req.body);

  res.sendFile(_dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  const { password } = req.body;

  if (password === userPassword) {
       res.sendFile(_dirname + "/public/secret.html");
  } else {
       res.sendFile(_dirname + "/public/index.html");
    // res.send("Incorrect");
  }
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
