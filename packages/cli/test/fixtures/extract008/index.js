var SG = require('strong-globalize');
SG.SetRootDir(__dirname);
var g = new SG();

var json = g.t(
  'data/data.yaml',
  '[' +
    '  "title",' +
    '  ["types", 0],' +
    '  ["types", 1],' +
    '  ["types", 2],' +
    '  ["types", 3],' +
    '  ["threeWrites", "e"],' +
    '  ["threeWrites", "o"],' +
    '  ["threeWrites", "w"]' +
    ']'
);
console.log(JSON.stringify(json, null, 2));
