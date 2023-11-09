# Social Network API 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/RedactdName/socialNetworkAPI.git)

## Description 

This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses `Express.js` for routing, a `MongoDB` database, the `Mongoose` ODM, and `Moment.js` to format timestamps. The seed data is created using `Insomnia`.


## Table of Contents 

- [Demonstration](#demonstration)
- [User Story](#user-story)
- [Installation](#installation)
- [Technologies](#technologies)
- [Tests](#tests)
- [Contribution](#contribution)
- [Questions](#questions)
- [Credits](#credits)

## Demonstration 
[Demonstration to open and run in Insomnia](https://drive.google.com/file/d/1cLkZr2X6gd7C9O344uJdvhzR84eZQM5K/view)

[Alternate demo of Thoughts in Insomnia](https://drive.google.com/file/d/1kmt5fgAMCRpIn8PrLptVetYce-Fq-ofo/view)


## User Story 

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data


GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


## Installation
After opening in VSCode

Open in integrated terminal

npm i to install packages

npm run watch to connect to server

Switch over to Insomnia to test

## Technologies

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Tests

Test using Insomnia or Postman

## Contribution

Developed with help from tutors Sandra Smith and Corey Yates and Zack assisting. If you would like to add further conritbution, fork/clone the repo and update.

## Credits
created 2023 by NameRedactd