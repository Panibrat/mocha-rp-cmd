  console.log('Opening launch... \n');

  const path = require('path');
  const fs = require('fs');
  const fileConfig = require('./configs/config');
  const user_token = fileConfig.config.mochaOpts.reporterOptions.reporterOptions.configOptions.password;
  const user_project = fileConfig.config.mochaOpts.reporterOptions.reporterOptions.configOptions.project;

  const syncClient = require('sync-rest-client');
  syncClient.addGlobalHeader('Accept',' application/json');
  syncClient.addGlobalHeader('Authorization', 'bearer ' + user_token);

  var postUrl = 'https://rp.epam.com/api/v1/' + user_project + '/launch?' + user_token;
  var timeStart = new Date().valueOf();
  var bodyToPost = {
    "name": "[LAUNCH AUTO]###",
    "start_time": timeStart,
    "description": 'auto test',
    "tags": undefined
  };
  let toPost = syncClient.post(postUrl, {payload: bodyToPost});
  console.log("Launch opened: ", toPost.body);
