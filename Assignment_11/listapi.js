var express = require("express")
var app = express()
var port =8909
var mongodb = require("mongodb")
var mongoclient = mongodb.MongoClient
var mongourl="mongodb://localhost:27017"
var db
 
app.get("/",(req,res) =>{
    res.send("Api is running")
})
app.get('/:id',(req,res) => {
    console.log(req.params.id)
    db.collection("restaurant").find({_id:req.params.id}).toArray((err,data)=>{
        if(err) throw err
        res.send(data)
    })
})



mongoclient.connect(mongourl,(err,client) => {
    if(err) throw err
    db = client.db("edurekainternship")
    app.listen(port,(err)=>{
        if(err) throw err
        console.log(`Server running on port ${port}`)
    })

})