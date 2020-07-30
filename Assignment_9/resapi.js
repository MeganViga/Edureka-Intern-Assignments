var express =  require('express');
var mongodb = require("mongodb");
var expobj  = express();
var port = 7777;
var mongoclient = mongodb.MongoClient;
var mongourl = "mongodb://localhost:27017";
var db;

expobj.get("/:cityname",(req,res) => {
    db.collection("restaurant").find({city_name:req.params.cityname}).toArray((err,data) => {
        if(err) throw err;
        res.send(data);
    })
})


mongoclient.connect(mongourl,(err,client) => {
    if(err) throw err;
    db =   client.db("edurekainternship");
    expobj.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server running on port ${port}`);
    })

})
 
