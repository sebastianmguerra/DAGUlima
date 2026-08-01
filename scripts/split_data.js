const fs = require('fs');
const path = require('path');

// Read and evaluate the data.js to get the CAREERS_DATA object
const dataJsPath = path.join(__dirname, '..', 'js', 'data.js');
const raw = fs.readFileSync(dataJsPath, 'utf8');

// Extract the object literal by stripping the const declaration
const match = raw.match(/const CAREERS_DATA\s*=\s*(\{[\s\S]*\});?\s*$/);
if (!match) {
  console.error('Could not parse CAREERS_DATA from data.js');
  process.exit(1);
}

let CAREERS_DATA;
try {
  CAREERS_DATA = eval('(' + match[1] + ')');
} catch (e) {
  console.error('Failed to eval CAREERS_DATA:', e.message);
  process.exit(1);
}

// Output directory for JSON files
const outDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const keys = Object.keys(CAREERS_DATA);
console.log(`Found ${keys.length} careers: ${keys.join(', ')}`);

keys.forEach(key => {
  const career = CAREERS_DATA[key];
  const outPath = path.join(outDir, `${key}.json`);
  fs.writeFileSync(outPath, JSON.stringify(career, null, 2), 'utf8');
  console.log(`Written: data/${key}.json  (${career.courses.length} courses)`);
});

console.log('\nDone! All career JSON files created in data/');
