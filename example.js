var PW = require("./"),fs = require("fs");

var pngword = new PW();

pngword.on("parsed",function(){
	this.readPng("221",function(data){
		fs.writeFileSync("pngword.png",data);
	});
});

