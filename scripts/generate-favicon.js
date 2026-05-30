// Convierte public/favicon.png a public/favicon.ico usando png-to-ico
// Uso: instalar dependencia dev: npm install --save-dev png-to-ico
// Luego ejecutar: npm run generate:favicon

const fs = require('fs');
const path = require('path');
const pngToIcoModule = require('png-to-ico');
const pngToIco = pngToIcoModule && (pngToIcoModule.default || pngToIcoModule);

const input = path.join(__dirname, '..', 'public', 'favicon.png');
const output = path.join(__dirname, '..', 'public', 'favicon.ico');

async function run() {
  try {
    if (!fs.existsSync(input)) {
      console.error('No se encontró', input);
      process.exit(1);
    }
    const buffer = await pngToIco([input]);
    fs.writeFileSync(output, buffer);
    console.log('favicon.ico creado en', output);
  } catch (err) {
    console.error('Error generando favicon.ico:', err);
    process.exit(1);
  }
}

run();
