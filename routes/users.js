app=require('../app')


var fs = require("fs"),
    json;

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}





app.get('/users',function(req,res){
	// console.log(__dirname)
	// var json=readJsonFileSync('./public/Mockdata/'+'activities.json')
	res.send({"name":"test","age":18})

})