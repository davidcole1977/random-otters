const fs = require('fs');

const isImageFileName = fileName => /(\.jpg|\.jpeg|\.gif|\.png)$/.test(fileName);

const otterImageList = fs.readdirSync('src/otters');
const filteredImageList = otterImageList.filter(isImageFileName);
fs.writeFileSync('src/otterImageList.json', JSON.stringify(filteredImageList, null, 2));

console.log('>>> wrote otters to src/otterImageList.json');
