const finishLaunch = require('./finishLaunch');

async function closeAllLaunches() {
  const isFinished = await finishLaunch();
  //console.log('\nisFinished\n', isFinished);
  if(!isFinished) {
    closeAllLaunches();
  }
}
closeAllLaunches();
