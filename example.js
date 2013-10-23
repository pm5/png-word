var PW = require("./"),fs = require("fs");

//var pngword = new PW();
var pngword = PW();

pngword.on("parsed",function(){
	this.createPNG("221",function(data){
		fs.writeFileSync("pngword.png",data);
	});
});

