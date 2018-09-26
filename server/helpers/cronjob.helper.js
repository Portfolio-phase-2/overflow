var CronJob = require('cron').CronJob;
var kue = require('kue')
  , queue = kue.createQueue();

  var job = queue.create('email', {
    title: 'welcome email for tj'
  , to: 'tj@learnboost.com'
  , template: 'welcome-email'
}).save( function(err){
   if( !err ) console.log( job.id );
});


new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'Asia/Jakarta');

function sendEmail(email) {

}