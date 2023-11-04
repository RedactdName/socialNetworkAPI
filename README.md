# Social Network API 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/RedactdName/socialNetworkAPI.git)

## Description 

This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses `Express.js` for routing, a `MongoDB` database, the `Mongoose` ODM, and `Moment.js` to format timestamps. The seed data is created using `Insomnia`.



## Table of Contents 

- [Demonstration](#application-preview)
- [User Story](#user-story)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Tests](#tests)
- [Contribution](#contribution)
- [Questions](#questions)
- [Credits](#credits)

## Demonstration ⭐



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
