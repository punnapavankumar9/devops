const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const ejs = require('ejs');
const { hostname } = require('os');
const path = require('path');

const PORT = process.env.PORT || 80;

const app = express();
app.use(morgan('combined'));
app.use(helmet());

app.get("", async (req, res) => {
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
