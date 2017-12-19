## Requirements
* Node 8.4.0 or later (can be downloaded from https://nodejs.org/en/)
* Git

## Installation
```
npm i

```
replace file in \node_modules\mocha-rp-reporter\mocha-rp-reporter.js
by \mocha-rp-reporter\mocha-rp-reporter.js

```
npm run pre-test
```
## Config
Make your settings in \config\config.js
Use presetted file \config\config__.js
```
configOptions: {
  endpoint: 'https://rp.epam.com/api/v1',
  password: 'zzzzzz-03a9-yyyy-92a2-xxxxxxxx', // get it in rp.epam.com
  launch: '[LAUNCH NAME PATTERN]###', // name your Lounch pattern
  project: 'oleksandr_panibratenko_personal'  // name of your project
}

shardTestFiles: true, // This settings makes report Portal to create multiple launches for one test run

```
## Running tests
```
npm test
```

## Finish all launches
```
npm run finish-all
```

## Open launch (for test)
```
npm run open-launch
```
