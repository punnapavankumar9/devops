const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const { hostname } = require('os');

const PORT = process.env.PORT || 80;

const app = express();
app.use(morgan('combined'));
app.use(helmet());

app.get("", async (req, res) => {
    let bgColor = process.env.APP_COLOR;
    if (!bgColor) {
        bgColor = process.argv[2]?.startsWith('--color=') ? process.argv[2].slice(8) : 'green';
    }
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${hostname()}</title>
    </head>
    <body style="background-color:${bgColor}">
        <h1 style="text-align:center;"> Welcome! It's Working! 👍 <h1>
    </body>
    </html>
    `);
});


app.listen(PORT, () => {
    console.log("Application started on port: ", PORT);
});
