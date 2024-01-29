# Push-Operation-Test-Project
OrangeHRM E2E Testing

Framework covers the basic functionalities of the Orangehrm web app:
* Login
* Add user, check & delete data
* Time report query

Environment setup
* Clone repositories from github
* npm -i

Test run
* npx cypress open

Cypress Folder 
* cypress : the root directory
* cypress/e2e: contains test files 
* cypress/fixtures: contains test data 

It's Data Driven Test.

Report tool - Mocha reporter
* npx cypress run --headed --spec (path of .js file) browser chrome
* 3 reports added already in report folder



