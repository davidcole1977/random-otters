const fs = require('fs');

const otterImageList = fs.readdirSync('src/otters');
fs.writeFileSync('src/otterImageList.json', JSON.stringify(otterImageList, null, 2));

console.log('>>> wrote otters to src/otterImageList.json');
