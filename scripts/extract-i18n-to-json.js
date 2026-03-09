/**
 * Extracts I18N from AskEmpower.html and writes nested JSON locale files.
 * Usage: node scripts/extract-i18n-to-json.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const htmlPath = path.join(projectRoot, 'AskEmpower.html');
const localesDir = path.join(projectRoot, 'i18n', 'locales');

/**
 * Extract the I18N object literal from HTML by finding "var I18N = " and
 * then parsing until matching closing brace (respecting double-quoted strings).
 */
function extractI18NObject(html) {
  const marker = 'var I18N = ';
  const idx = html.indexOf(marker);
  if (idx === -1) throw new Error('I18N not found in HTML');
  let i = idx + marker.length;
  while (html[i] === ' ' || html[i] === '\n') i++;
  if (html[i] !== '{') throw new Error('Expected { after I18N = ');
  let depth = 1;
  const start = i;
  i++;
  while (i < html.length && depth > 0) {
    const c = html[i];
    if (c === '"') {
      i++;
      while (i < html.length) {
        if (html[i] === '\\') { i += 2; continue; }
        if (html[i] === '"') { i++; break; }
        i++;
      }
      continue;
    }
    if (c === '{') depth++;
    else if (c === '}') depth--;
    i++;
  }
  const objStr = html.slice(start, i);
  return Function('"use strict"; return (' + objStr + ')')();
}

/**
 * Convert flat keys like "nav.evolution" to nested object { nav: { evolution: "..." } }.
 */
function flatToNested(flat) {
  const result = {};
  for (const [key, value] of Object.entries(flat)) {
    const parts = key.split('.');
    let current = result;
    for (let j = 0; j < parts.length - 1; j++) {
      const p = parts[j];
      if (!(p in current)) current[p] = {};
      current = current[p];
    }
    current[parts[parts.length - 1]] = value;
  }
  return result;
}

function main() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const I18N = extractI18NObject(html);
  if (!fs.existsSync(localesDir)) fs.mkdirSync(localesDir, { recursive: true });
  for (const lang of ['en', 'fr', 'es']) {
    if (!I18N[lang]) continue;
    const nested = flatToNested(I18N[lang]);
    const outPath = path.join(localesDir, `${lang}.json`);
    fs.writeFileSync(outPath, JSON.stringify(nested, null, 2), 'utf8');
    console.log('Wrote', outPath);
  }
}

main();
