# timestamp-microservice
A simple practice app powered with expressjs for freecodecamp.com backend developement courses.

## View the app
you can view the app on https://serene-brook-74303.herokuapp.com/

## Purpose
This is an API project that serves a simple time conversion using javascript Date() object.

You can pass a string as a parameter and the it will check to see whether that string contains
either unix timestamp or a natural language date, eg. January 1, 2017. It will return a json object 
containing two keys: `unix`, and `natural`

Time string parameter is considered UTC and the returned values are also in UTC.

### Example usage

https://serene-brook-74303.herokuapp.com/December%2015,%202015

https://serene-brook-74303.herokuapp.com/1450137600

### Example output

`{ "unix": 1450137600, "natural": "December 15, 2015" }`

## Installation
####Clone the repo
`git clone https://github.com/tuxitop/timestamp-microservice.git`

`cd timestamp-microservice`
####Install the dependecies
`npm install`
####Run the app
`npm start`

you can view it by visiting [http://localhost:3000](http://localhost:3000) with a browser.
