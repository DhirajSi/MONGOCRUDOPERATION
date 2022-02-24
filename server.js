const bodyparser = require("body-parser");
const mongoose = require("mongoose");

//here we connected with mongoDb and creating collection
const url = "mongodb://localhost/employee";

//here we are importing controller class
const { app } = require("./controller/employee_controller");

//Note
//app.use(bodyparser.json());

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
con.on("open", function () {
  console.log("successfully database connected..");
});

app.listen(9000, () => {
  console.log("server started at 9000 port");
});
