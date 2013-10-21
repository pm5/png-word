var PW = require("./"),fs = require("fs");

var pngword = new PW();

pngword.on("parsed",function(){
	this.createReadStream("1113221").pipe(fs.createWriteStream("pngword.png"))
});

