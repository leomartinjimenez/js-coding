/**
 * @Date:   2018-03-26T13:51:51+02:00
 * @Last modified time: 2018-03-26T14:18:46+02:00
 * @Author: leomartinjimenez
 */

var express = require('express'); // Get the library
var application = express();  // Execute the library via var express into the app

application.get('/', start);
application.get('/courses', courses);

function start(request, result) {
  result.send('This is the <strong>HOME</strong>');
}
function courses(request, result) {
  result.send('These are the <strong>COURSES</strong>');
}

application.listen(8989);
