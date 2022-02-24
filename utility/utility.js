const fs = require("fs");

//loger function
function printlog(data) {
  //  var currentdate = new Date();

  fs.appendFile("log.txt", data, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Succesfully print log into file");
  });
}

//capture current date and time method
var currentdate = new Date();
var dateTime =
  "Last Sync: " +
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear() +
  " @ " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();

module.exports = {
  dateTime,
  printlog,
};
