var express=require("express");
var app=express();
var requestIp=require("request-ip");
var useragent=require("useragent");
var port=process.env.PORT||8080;
console.log('start');
app.get('/',function(req,res){
    res.send('hello !!!');
})
app.get('/api/whoami',function(req,res){
    var lang = req.acceptsLanguages('vi-VN', 'es', 'en');
    var agent = req.headers['user-agent'].split(" (");
    var au=agent[1].split(") ");
        console.log(agent);
    var ipAdress=requestIp.getClientIp(req);
    var results={"ipadress": ipAdress , "language": lang, "software": au[0]};
    res.send(results);
})

app.listen(port,function(){
    console.log("listening on port:"+port);
});