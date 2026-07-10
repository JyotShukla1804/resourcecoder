const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.svg')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Replace solid fill colors with transparent for the main background rects
        // Usually these are near the beginning of the SVG: <rect width="..." height="..." fill="#F4F4F5"/>
        if (content.includes('fill="#F4F4F5"')) {
            content = content.replace(/fill="#F4F4F5"/g, 'fill="transparent"');
            modified = true;
        }
        if (content.includes('fill="#FEFDFD"')) {
            content = content.replace(/fill="#FEFDFD"/g, 'fill="transparent"');
            modified = true;
        }

        // Also fix the pattern fill
        if (content.match(/fill="url\(#pattern0_[^"]+\)"/)) {
            content = content.replace(/fill="url\(#pattern0_[^"]+\)"/g, 'fill="transparent"');
            modified = true;
        }

        if (modified) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Updated ${file}`);
        }
      } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
      }
    }
  }
}

processDirectory(publicDir);
console.log('Done!');
