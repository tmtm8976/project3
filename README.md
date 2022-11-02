# Udagram
- This application is provided to you as an alternative starter project if you do not wish to host your own code done in the previous courses of this nanodegree. The udagram    application is a fairly simple application that includes all the major components of a Full-Stack web application.

## Getting Started
    1- Clone the repo:
        git clone https://github.com/tmtm8976/project3.git

    2- add .env file in udagram/udagram/api which contain:

        POSTGRES_USERNAME=
        POSTGRES_PASSWORD=
        POSTGRES_DB=
        PORT=
        POSTGRES_HOST=
        AWS_DEFAULT_REGION=
        AWS_PROFILE=
        AWS_BUCKET=
        URL=
        JWT_SECRET=
        EB_APP=
        EB_ENV=

    3- Install the required dependencies in both api & frontend
        npm install

    4- Run frontend:
         npm run start

    5- Run api:
        pm run start-dev


# Project Overview:

<a href="docs/Infrastructure description.md">1. Infrastructure description</a>

<a href="docs/App dependencies.md">   2. App dependencies.md</a>

<a href="docs/Pipeline process.md">   3. Pipeline process.md</a>

# Installation
## Provision the necessary AWS services needed for running the application:

- In AWS, provision a publicly available RDS database running Postgres.
- In AWS, provision a s3 bucket for hosting the uploaded files.
- Export the ENV variables needed or use a package like dotnev/.
- From the root of the repo, navigate udagram-api folder cd starter/udagram-api to install the node_modules npm install. After installation is done start the api in dev mode with npm run dev.
- Without closing the terminal in step 1, navigate to the udagram-frontend cd starter/udagram-frontend to intall the node_modules npm install. After installation is done start the api - in dev mode with npm run start.

# Testing
## This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

- cd starter/udagram-frontend
- npm run test
- npm run e2e

## There are no Unit test on the back-end

## Unit Tests:
- Unit tests are using the Jasmine Framework.

## End to End Tests:
The e2e tests are using Protractor and Jasmine.

# Built With
- Angular - Single Page Application Framework
- Node - Javascript Runtime
- Express - Javascript API Framework


# Author
Fatma Yasser
