/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _Rosco Tanner____________ Student ID: _126154236_____________ Date: ___1/20/2024_____________
*
********************************************************************************/ 
// Creating the "Server Paths"
const studentName = "Rosco Tanner";
const studentEmail = "rdgtanner@myseneca.ca";

const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  `This assignment was prepared by ${studentName}`,
  `${studentName}: ${studentEmail}`,
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

// Creating the "web server simulator" Function - "httpRequest"
function httpRequest(httpVerb, path) {
  for (let i = 0; i < serverPaths.length; i++) {
    if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
      return `200: ${serverResponses[i]}`;
    }
  }
  return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manually Testing the "httpRequest" Function
console.log(httpRequest("GET", "/")); // should show "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // should show `200: This Assignment was prepared by ${studentName}`
console.log(httpRequest("PUT", "/")); // should show "404: Unable to process PUT request for /"

// Automating the Tests by creating an "automateTests" Function
const testVerbs = ["GET", "POST"];
const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function automateTests() {
  function randomRequest() {
    const randVerb = testVerbs[getRandomInt(testVerbs.length)];
    const randPath = testPaths[getRandomInt(testPaths.length)];
    console.log(httpRequest(randVerb, randPath));
  }

  setInterval(randomRequest, 1000);
}

// Invoke the "automateTests" function
automateTests();


