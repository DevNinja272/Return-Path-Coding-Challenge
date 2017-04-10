//////////////////
/* Dependencies */
//////////////////
var express = require("express");
var app     = express();

///////////////////////// 
/* Store Folder Routes */
/////////////////////////

app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/stylesheet'));
app.use(express.static(__dirname + '/json'));

//////////// 
/* Routes */
////////////
app.get('/',function (req,res){
  res.sendFile('index.html');
});

///////////////////// 
/* Port Management */
/////////////////////

// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 3000;

app.listen(port, function () {
    console.log('Application listening on port ' + port);
});
