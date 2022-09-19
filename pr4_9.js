var util = require('util');
var my_name = 'Nirnay'
var my_phone_no=7016905505
var my_email_id='nirnayraval20@gnu.ac.in'
var my_address='kalol,gujarat,india'
var my_edu='running B.Tech(IT) at Ganpat University'
var my_occu='coder'
var format1 = util.format('My name is %s ',my_name);
var format2 = util.format('My mobile no is %d',my_phone_no);
var format3 = util.format('My email is is %s',my_email_id);
var format4 = util.format('My address is %s',my_address);
var format5 = util.format('My education : %s',my_edu);
var format6 = util.format('My occupation : %s',my_occu);
console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);
console.log(format5);
console.log(format6);
console.log(util.log('Timestamped'))
