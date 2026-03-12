const express = require('express');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();
const s3 = new AWS.S3();

app.get('/health', (req, res) => {
  res.send('API is running');
});

app.listen(3000, () => console.log('Server started on port 3000'));
