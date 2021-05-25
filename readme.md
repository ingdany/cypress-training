# Install Cypress
1. Install Node JS
https://nodejs.org/en/download/
2. Make project directory
3. Init project `npm init`
4. Install cypress dependency `npm i cypress -D`
5. Open package.json file 
6. Modify scripts/test `cypress open --project ./test`
7. You need to run previous command to open cypress.

# Run from Command Line

## Open cypress

`npx cypress open`

`npm run test`

## Run all spec files in a folder

`npx cypress run -- spec "cypress/integration/example/*"`

`npm run test --spec "cypress/integration/example/*"`

## Run one spec file

`npx cypress run --spec "cypress/integration/example.actions.spec.js`

## Run specific test
`it.only and it.skip`

## Run test in browser

`C:\Users\dperez\cy>node_modules\.bin\cypress run --browser chrome`
`npx cypress run --browser chrome`

# Plugins

docs.cypress.io/plugins/index.html
http://cgi-lib.berkeley.edu/ex/fup.html

## File Upload

`npm install --save-dev cypress-file-upload`

## Install Mocha

`npm install mocha --save-dev`

## Install cypress-multi-reporters

`npm install cypress-multi-reporters --save-dev`

## Install mochawesome

`npm install mochawesome --save-dev`

## Install mochawesome-merge

`npm install mochawesome-merge --save-dev`

## Install mochawesome-report-generator

`npm install mochawesome-report-generator --save-dev`

To combine json files into one

`mochawesome-merge --reportDir cypress/reports/mocha > cypress/reports/mochareports/report.json`

To generate HTML Report 

`marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports`

`npm run test && npm run combine-reports && npm run generate-report`

## Cucumber

## Install cucumber-prepocessors

`npm install --save-dev cypress-cucumber-preprocessor`