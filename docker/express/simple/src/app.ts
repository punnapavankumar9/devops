import express, { Express, Application, Request, Response } from "express";
import path from "path";
import ejs from "ejs";
import { hostname } from "os";

const PORT = process.env.PORT || 80;

const app = express();

app.get("", async (req: Request, res: Response) => {
  console.log(hostname());
  res.send(
    await ejs.renderFile(path.join(__dirname, "..", "static", "index.ejs"), {
      hostname: hostname(),
    })
  );
});

app.listen(PORT, () => {
  console.log("Application started on port: ", PORT);
});
