# habit100 

habit100 is a React application that consumes a RESTful express/mongoose [API](https://github.com/OppNHeimer/habit-back).

habit100 is a tool to help users cement positive habits through a simple UI. User's login to create a new 'habit', or task to be completed daily, and simply check-in each day they complete the habit. Colorful blocks act as tallies so users can easily see how many times they've completed the habit.

Check out the deployed MVP at https://oppnheimer.github.io/habit100/ (it may take a second to load, the API is hosted for free with Heroku)

or run locally:

[install MongoDB](https://docs.mongodb.com/v3.0/installation/)

download and start a local express/mongoose server
```bash
$ git clone https://github.com/OppNHeimer/habit-back
$ cd habit-back
$ npm install
$ node index.js
```

download and run front-end code
```bash
$ git clone https://github.com/OppNHeimer/habit-front
$ cd habit-front
$ npm install
$ npm start
```

## features in progress

- limit users to check each habit only once per day
- limit number of days skipped before habit is lost and user must start over
- styling for mobile

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
