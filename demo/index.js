var qqWechatEmotionParser = require('../src/index.js');

var text = 'I love wiki /::), and I fuck wiki/:<L>.';
var html = qqWechatEmotionParser(text);

console.log(text);
console.log(html);

