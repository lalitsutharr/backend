Video Size Reduction API
This project demonstrates building a RESTful API using Node.js, Express.js, and Amazon Web Services (AWS) services like Amazon S3 and Amazon EC2.

Getting Started
These instructions will guide you through setting up the project, integrating Amazon S3, deploying on Amazon EC2, and running the API.

Prerequisites
Node.js and npm installed
AWS account with S3 and EC2 access
Installing


Clone the repository:
bash

Copy code

git clone https://github.com/yourusername/video-size-reduction-api.git
cd video-size-reduction-api

Install dependencies:

bash

Copy code

npm install

Setting Up Amazon S3 Integration

Create an AWS S3 bucket to store uploaded and compressed videos.

Configure your AWS credentials either through environment variables or AWS CLI.

Update the config.js file with your S3 bucket name and region.

Deployment on Amazon EC2

Launch an EC2 instance using the appropriate AMI (e.g., Amazon Linux 2).

SSH into the instance using your EC2 key pair:

bash

Copy code


ssh -i path/to/your/keypair.pem ec2-user@your-instance-ip

Follow the steps mentioned in the previous instructions to install Node.js, pm2, and deploy the application.

Environment Variables

Create a .env file in the root directory of the project and set the following variables:




plaintext

Copy code

PORT=3000

AWS_ACCESS_KEY_ID=your_access_key_id

AWS_SECRET_ACCESS_KEY=your_secret_access_key

S3_BUCKET_NAME=your_s3_bucket_name

S3_REGION=your_s3_bucket_region

Running the API


Start the API using pm2:

bash

Copy code

pm2 start app.js --name "video-api"

Access the API at http://your-instance-ip:3000.

API Endpoints

POST /upload: Upload a video file for compression.

GET /download/:filename: Download a compressed video file by providing the filename.

Built With

Node.js


Express.js
AWS SDK for Node.js


Fluent-FFmpeg

Authors

Your Name

License

This project is licensed under the MIT License - see the LICENSE file for details.
