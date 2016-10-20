var fs = require('fs');
var callback = function (err, data) {
  if (err) return console.log(err);
  console.log(data);
};
fs.readFile('text.txt', 'utf8', callback);
