import express, { Express, Application, Request, Response } from 'express';
import path from 'path';

const PORT = process.env.PORT || 80

const app = express();

app.get("", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "..", "static", "index.html"));
});


app.listen(PORT, () => {
    console.log("Application started on port: ", PORT);
})

