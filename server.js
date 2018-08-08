const express = require('express'),
      app = express();

const Routes = require("./routes/routes.js");

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use('/', Routes);

app.listen(process.env.PORT, function(){
    console.log("server started");
})