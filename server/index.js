const express = require('express');
const path = require('path');

const port = process.env.PORT || 3006;
const app = express();
const buildPath = path.resolve(__dirname, '../build');

app.use('/', express.static(buildPath));

app.listen(port, () => {
  console.log(`Listening to port ${ port }.`);
});