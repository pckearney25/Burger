# Burger
A full-stack node express app, that uses MySQL as a database and handlebars to aid in html rendering.

## Overview

The app is designed as to enable a client to interact with a server-side MySQL database through a web browser. While presented here as a "Eat-Da-Burger!" The program's code can be rethemed for a multitude other applications for keeping track of an action (presented as text) and checking off completed actions.  


In "Eat-Da-Burger!, upon entering the appropriate URL, the client is presented with: 
* a list of hamburgers that he/she has previously entered into the system and would like to eat.  
* a list of hamburgers that he/she has previously entered and has eaten.
* a form for adding a new hamburger that he/she would like to eat.

Additionally, next to each burger on the uneaten list, the client is given a button to move that item to the eaten list. 

Operationally, the user interacts with the database from a single HTML page which is refreshed to present changes via express-handlebars. Ajax calls are used to present client-side info to the server, which returns new information via JSON objects. On the server side, all requests and responses are handled through a custom ORM model.

## Installation

Upon downloading/cloning the application from this GitHub repository, a potential user will need to install the express, express-handlebars, body-parser and mysql npm packages as documented in the package.json file. These packages can be obtained at https://www.npmjs.com. A deployed version app can be found on Heroku at (insert after deployment). 

## Authors

The Burger app presented here was coded by Patrick Kearney. Portions of the code were derived from educational materials provided as part of the University of Kansas Full-Stack Web-Development Coding Bootcamp Program offered in conjunction with Trinity Educational Services. 

## Built With

* JavaScript and JQuery.
* Node.js for running the server via the server.js program. 
* The Express, Express Handlebars, and Body-parser packages for enabling server and client side interactions. 
* MySQL is used to construct the database and hold its information. 
* Bootstrap 4.1 was used to construct the html pages.
* Font Awesome was used to incorporate the utensils used in the html buttons. 
* Google Fonts provided the festive Dancing Script used in the headers and buttons. 

## License

This project is licensed under the MIT License.

## Acknowledgments

This application was constructed as part of the University of Kansas Full-Stack Web-Development Coding Bootcamp Program offered in conjunction with Trinity Educational Services. Thanks to these institutions for providing the initial project requirements and examples of code that served as a guide for building the application. 

