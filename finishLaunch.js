function finishLaunch() {
  console.log('Finishing launch... \n');

  const path = require('path');
  const fs = require('fs');

  const fileConfig = require('./configs/config');
  const user_token = fileConfig.config.mochaOpts.reporterOptions.reporterOptions.configOptions.password;
  const user_project = fileConfig.config.mochaOpts.reporterOptions.reporterOptions.configOptions.project;

  const syncClient = require('sync-rest-client');
  syncClient.addGlobalHeader('Accept',' application/json');
  syncClient.addGlobalHeader('Authorization', 'bearer ' + user_token);

  //console.log("\nGET_HEADERS:\n", syncClient.getGlobalHeaders());
  var response = syncClient.get(
    'https://rp.epam.com/api/v1/'
     + user_project
     + '/launch?filter.eq.status=IN_PROGRESS'
  );

  var launchId = null;

  try{
    if(response.body.content[0].id){
      launchId = response.body.content[0].id;

      var launchStatus = syncClient.get('https://rp.epam.com/api/v1/' + user_project + '/launch/' + launchId);

      //console.log("\nGET_LAUNTH STATUS RESPONSE:\n", launchStatus);
      //console.log("\nGET_LAUNTH STATUS RESPONSE:\n", launchStatus.body.statistics.executions.failed);
      var status = (launchStatus.body.statistics.executions.failed > 0) ? 'FAILED' : 'PASSED';
      var timeFinish = new Date().valueOf();
      var testBody = {
        "end_time": timeFinish,
        "status":  status,  //FAILED
      };

      var putUrl = 'https://rp.epam.com/api/v1/' + user_project + '/launch/' + launchId + '/finish'
      var toFinish = syncClient.put(putUrl, {payload: testBody});
      console.log("Finished: ",toFinish.body);
      return false;
    }
  } catch(err) {
    console.log('no opened launches for now');
    return true;
  }
  //console.log("\nGET_RESPONSE:\n", launchId);
};

//finishLaunch();

module.exports = finishLaunch;
