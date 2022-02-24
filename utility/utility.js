const fs = require("fs");

// //loger function
// function printlog(data) {
//   //  var currentdate = new Date();

//   fs.appendFile("log.txt", data, function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesfully print log into file");
//      fs.appendFile("logbook.txt","123",function(err){
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("log book maintain");
//       }

//      })
//     }
//   });
// }

// printlog("log1");

function asynPrintLog(data) {
  return new Promise((resolve, reject) => {
    fs.appendFile("log.txt", data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("Succesfully print log into file");
      }
    });
  });
}

function asynPrintLogBook(data) {
  return new Promise((resolve, reject) => {
    fs.appendFile("logbook.txt", "12345", function (err) {
      if (err) {
        resolve("log book maintain");
      } else {
      
        reject("errorrrrrrrrrrrrrrr");
      }
    });
  });
}

// asynPrintLog("hello")
//   .then((msg) => {
//     console.log(msg);
//     asynPrintLogBook("hiiiiii")
//       .then((msg2) => {
//         console.log(msg2);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function createLog(){
  try {
    const msg=await asynPrintLog("newabcd");
    console.log(msg);

    const msg2=await asynPrintLogBook("newlogbookmsg");
    console.log(msg2)
    
  } catch (error) {
    console.log("##########"+error)
  }

}

createLog();








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

// module.exports = {
//   dateTime,
//   printlog,
// };
