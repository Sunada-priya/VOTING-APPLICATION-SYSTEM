# VOTING-APPLICATION-SYSTEM

Project aims to develop a modern, serverless voting application utilizing AWS Lambda, DynamoDB, and API Gateway. This application will provide users with a platform to participate in viewing voting results.
Upon completion, the project will deliver a fully functional serverless voting application deployed on AWS. Users will be able to participate in voting , and experience a seamless voting experience. The application will adhere to modern design principles, security standards, and cost-efficient infrastructure, ensuring a reliable and scalable solution for online voting needs.

STEP-1: OPEN AWS MANAGEMENT CONSOLE AND CREATE A S3 BUCKET WITH NAME   MYVOTESYSTEM

STEP-2: UPLOAD ALL THE FILES REQUIRED FOR FRONTEND

STEP-3: CREATE IAM ROLES AND GIVE ACCESS TO S3, API GATEWAY, LAMBDA

STEP-4: CREATE LAMBDA AND ADD CODE TO LAMBDA FUNCTION

STEP-5: ADDING S3 TRIGGER FOR S3 AND LAMBDA FUNCTION

STEP-6: CREATE DYNAMODB TABLE VOTES AND FIND THE RESULTS OF THE TALLY 

SERVICES USED:

API Gateway: This creates a POST endpoint for user votes, and forwards an event to
Lambda.

Lambda: These are scalable containers for the app. There are two Lambda functions:
Function 1: Updates the database with a user’s vote

DynamoDB: The data is stored in a managed NoSQL database.

S3: HTML/CSS/JS files are hosted as a website. A JSON file on S3
caches the latest tallies, which reduces the number of calls to DynamoDB.
