png-word
========

when give a text word , then create a png.

install
=======

  npm install png-word

example
=======
```js
var PW = require("node-png"),fs = require("fs");

var pngword = new PW(); // use defalt config

pngword.on("parsed",function(){
	this.createReadStream("1113221").pipe(fs.createWriteStream("pngword.png"))
});
```

LICSENCE
========

MIT , brighthas <brighthas@gmail.com>
