import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const distPath = path.resolve(process.cwd(), 'dist');
const downloadPath = path.resolve(process.cwd(), 'public', 'download');

if (!fs.existsSync(downloadPath)) {
  fs.mkdirSync(downloadPath, { recursive: true });
}

// Find built css and js files
const assetsDir = path.join(distPath, 'assets');
const assets = fs.readdirSync(assetsDir);
const cssFile = assets.find(f => f.endsWith('.css'));
const jsFile = assets.find(f => f.endsWith('.js'));

if (!cssFile || !jsFile) {
  console.error('Missing css or js file in dist/assets');
  process.exit(1);
}

const rawHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');
const rawCss = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
const rawJs = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');

// 1. Standalone Single-File HTML (Inlined CSS and Inlined JS)
// Replace stylesheet links and script tags with inlined versions
let standaloneHtml = rawHtml
  .replace(/<link rel="stylesheet"[^>]*href="[^"]*\/assets\/[^"]*\.css"[^>]*>/g, '')
  .replace(/<script type="module"[^>]*src="[^"]*\/assets\/[^"]*\.js"><\/script>/g, '');

standaloneHtml = standaloneHtml.replace('</head>', `<style>\n${rawCss}\n</style>\n</head>`);
standaloneHtml = standaloneHtml.replace('</body>', `<script>\n${rawJs}\n</script>\n</body>`);

fs.writeFileSync(path.join(downloadPath, 'ebradi-home-standalone.html'), standaloneHtml);

// 2. Separate HTML, CSS, JS
let cleanHtml = rawHtml
  .replace(/href="\/assets\/[^"]*\.css"/g, 'href="./styles.css"')
  .replace(/src="\/assets\/[^"]*\.js"/g, 'src="./app.js"');

fs.writeFileSync(path.join(downloadPath, 'index.html'), cleanHtml);
fs.writeFileSync(path.join(downloadPath, 'styles.css'), rawCss);
fs.writeFileSync(path.join(downloadPath, 'app.js'), rawJs);

// 3. Create README.txt
const readme = `================================================================================
EBRADI - ESCOLA BRASILEIRA DE DIREITO
Código-Fonte da Página Home (HTML, CSS e JavaScript)
================================================================================

Este pacote contém os arquivos da página Home da EBRADI com todas as melhorias:
1. Navbar com fundo na cor #0b1b36 e logo oficial.
2. Carrossel de Banners de Pós-Graduação em Direito.
3. Seção dos Patronos com fotos e tipografia ampliadas para acessibilidade jurídica.
4. Seção de Comentários / Depoimentos de Alunos com fotos e textos em itálico.
5. Cards de Cursos no formato com foto executiva, badges ONLINE e 35% OFF, tag LAW CASE / PÓS e metadados de horas e parcelamento em cartão.

ARQUIVOS INCLUSOS:
- ebradi-home-standalone.html : Arquivo ÚNICO pronto para duplo clique (abre direto em qualquer navegador sem servidor).
- index.html                  : Estrutura HTML da página.
- styles.css                  : Estilos compilados com Tailwind CSS.
- app.js                      : Lógica e interatividade completa em JavaScript.

COMO EXECUTAR:
Opção 1: Basta dar 2 cliques no arquivo "ebradi-home-standalone.html" para abrir no navegador!
Opção 2: Use qualquer servidor local (como "npx serve .", Live Server do VS Code ou Python "python -m http.server 8000").
`;

fs.writeFileSync(path.join(downloadPath, 'README.txt'), readme);

// 4. Create ZIP using standard zip header format (store or deflate)
// Minimal zip generator in pure Node without external deps
function createZip(files) {
  const buffers = [];
  const centralDirectoryHeaders = [];
  let offset = 0;

  for (const file of files) {
    const nameBuf = Buffer.from(file.name, 'utf8');
    const dataBuf = Buffer.isBuffer(file.content) ? file.content : Buffer.from(file.content, 'utf8');
    
    // CRC-32 calculation
    let crc = 0 ^ (-1);
    for (let i = 0; i < dataBuf.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ dataBuf[i]) & 0xFF];
    }
    crc = (crc ^ (-1)) >>> 0;

    // Local file header (30 bytes + name + data)
    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0); // local file header signature
    localHeader.writeUInt16LE(20, 4);         // version needed to extract
    localHeader.writeUInt16LE(0, 6);          // general purpose bit flag
    localHeader.writeUInt16LE(0, 8);          // compression method: 0 (store)
    localHeader.writeUInt16LE(0, 10);         // file last mod time
    localHeader.writeUInt16LE(0, 12);         // file last mod date
    localHeader.writeUInt32LE(crc, 14);       // crc-32
    localHeader.writeUInt32LE(dataBuf.length, 18); // compressed size
    localHeader.writeUInt32LE(dataBuf.length, 22); // uncompressed size
    localHeader.writeUInt16LE(nameBuf.length, 26); // file name length
    localHeader.writeUInt16LE(0, 28);         // extra field length

    buffers.push(localHeader, nameBuf, dataBuf);

    // Central directory header (46 bytes + name)
    const cdHeader = Buffer.alloc(46);
    cdHeader.writeUInt32LE(0x02014b50, 0); // central file header signature
    cdHeader.writeUInt16LE(20, 4);          // version made by
    cdHeader.writeUInt16LE(20, 6);          // version needed to extract
    cdHeader.writeUInt16LE(0, 8);           // general purpose bit flag
    cdHeader.writeUInt16LE(0, 10);          // compression method (store)
    cdHeader.writeUInt16LE(0, 12);          // file last mod time
    cdHeader.writeUInt16LE(0, 14);          // file last mod date
    cdHeader.writeUInt32LE(crc, 16);        // crc-32
    cdHeader.writeUInt32LE(dataBuf.length, 20); // compressed size
    cdHeader.writeUInt32LE(dataBuf.length, 24); // uncompressed size
    cdHeader.writeUInt16LE(nameBuf.length, 28); // file name length
    cdHeader.writeUInt16LE(0, 30);          // extra field length
    cdHeader.writeUInt16LE(0, 32);          // file comment length
    cdHeader.writeUInt16LE(0, 34);          // disk number start
    cdHeader.writeUInt16LE(0, 36);          // internal file attributes
    cdHeader.writeUInt32LE(0, 38);          // external file attributes
    cdHeader.writeUInt32LE(offset, 42);     // relative offset of local header

    centralDirectoryHeaders.push(cdHeader, nameBuf);
    offset += localHeader.length + nameBuf.length + dataBuf.length;
  }

  const cdOffset = offset;
  let cdSize = 0;
  for (const b of centralDirectoryHeaders) {
    cdSize += b.length;
  }

  // End of central directory record (22 bytes)
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0); // end of central dir signature
  eocd.writeUInt16LE(0, 4);          // number of this disk
  eocd.writeUInt16LE(0, 6);          // disk where central dir starts
  eocd.writeUInt16LE(files.length, 8); // number of central dir records on this disk
  eocd.writeUInt16LE(files.length, 10); // total number of central dir records
  eocd.writeUInt32LE(cdSize, 12);     // size of central dir
  eocd.writeUInt32LE(cdOffset, 16);   // offset of start of central directory
  eocd.writeUInt16LE(0, 20);          // comment length

  return Buffer.concat([...buffers, ...centralDirectoryHeaders, eocd]);
}

// CRC32 table
const crcTable = (() => {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  return table;
})();

const zipBuffer = createZip([
  { name: 'ebradi-home-standalone.html', content: standaloneHtml },
  { name: 'index.html', content: cleanHtml },
  { name: 'styles.css', content: rawCss },
  { name: 'app.js', content: rawJs },
  { name: 'README.txt', content: readme },
]);

fs.writeFileSync(path.join(downloadPath, 'ebradi-home-codigo.zip'), zipBuffer);

console.log('✅ Generated standalone files and ZIP in public/download/:');
console.log('- ebradi-home-standalone.html (' + (standaloneHtml.length / 1024).toFixed(1) + ' KB)');
console.log('- ebradi-home-codigo.zip (' + (zipBuffer.length / 1024).toFixed(1) + ' KB)');
console.log('- index.html, styles.css, app.js, README.txt');
