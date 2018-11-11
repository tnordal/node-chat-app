// Jan 1st 1970 00:00:00 am
// Timestamp value 1 milli second
const moment = require('moment');

var date = moment();
date.add(1, 'y').add(1,'hours');
console.log(date.format('MMM Do YYYY hh:mm:ss a')); 
 