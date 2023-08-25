const AWS = require('aws-sdk');
const config = require('../config'); // Load your AWS credentials and bucket configuration

const s3 = new AWS.S3();

exports.downloadVideo = (req, res) => {
  const { filename } = req.params;

  const params = {
    Bucket: config.backend14331,
    Key: `uploads/${"C:\Users\lalit\Downloads\Video\lalit.mp4"}` 
  };

  const stream = s3.getObject(params).createReadStream();
  stream.on('error', (err) => {
    console.error('Error streaming:', err);
    res.status(500).json({ error: 'Error streaming video' });
  });

  res.setHeader('Content-Type', 'video/mp4'); 
};
