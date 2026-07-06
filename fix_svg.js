const fs = require('fs');
const file = 'public/metaverse-standards-logo-60px.svg';
let data = fs.readFileSync(file, 'utf8');
data = data.replace(/style="fill-rule:nonzero;"/g, 'style="fill:#ffffff;fill-rule:nonzero;"');
fs.writeFileSync(file, data);
console.log('SVG updated successfully');
