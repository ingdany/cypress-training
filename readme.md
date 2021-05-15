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
```
C:\Users\dperez\cy>node_modules\.bin\cypress open

node_modules\.bin\cypress run spec "C:\users\dperez\cy\test\cypress\integration\examples\FirstTest.js"

C:\Users\dperez\cy>node_modules\.bin\cypress run --browser chrome
```

```
npx cypress open
```
