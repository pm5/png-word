var opener = "å"
var closer = "Ω"
var string = opener+" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"+closer
var repo = {}
for(var i=0; i<string.length; i++){
	repo[string[i]]=i;
}

module.exports.repo = repo;
module.exports.opener = opener;
module.exports.closer = closer;