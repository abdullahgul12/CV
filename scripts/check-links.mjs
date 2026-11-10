// Verifies that every required URL appears exactly in the built site and the
// source, and that the source contains no other external URLs.
// Run after `npm run build`:  node scripts/check-links.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');

const REQUIRED = [
  // Profile, contact and socials
  'https://drive.google.com/file/d/1fDvCzMDp5uuDkvFAiFJfwFgW13jJhC2t/view?usp=sharing',
  'https://www.linkedin.com/in/abdullah-gul-424a6414b/',
  'https://web.facebook.com/abdullahgul11',
  'https://twitter.com/AbdullahGulAwa1',
  'https://www.instagram.com/abdullah.gul12/',
  'mailto:abdullah_gul@Live.com',
  'tel:+923324847296',
  // GeniTeam Solutions
  'https://www.youtube.com/watch?v=LMz83P-2nZY',
  'https://youtu.be/ft5TWnPTEUs',
  'https://youtu.be/GXuURhyN_Jo',
  // Game Tap Studio
  'https://youtu.be/Q4h99NOFqBs',
  'https://www.youtube.com/watch?v=5yxdEETAoQ0',
  'https://youtu.be/gkCYsgEO8Aw',
  'https://www.youtube.com/watch?v=g9XoU-PVx48',
  'https://youtu.be/clg5UHwOhww',
  'https://youtu.be/svELugTHhXw',
  'https://youtu.be/V1fUc9jsAeg',
  'https://youtu.be/hUSD4U4xyjE',
  // UET Gaming Studio
  'https://www.youtube.com/watch?v=ZaIclppFxQ0',
  'https://www.youtube.com/watch?v=oyoI9MDKsHM',
  'https://www.youtube.com/watch?v=DztUj93TFg8',
  'https://www.youtube.com/watch?v=yOs4N1HAZsw',
  'https://www.youtube.com/watch?v=eGpjPUrb_Zo',
  'https://www.youtube.com/watch?v=zCSDBbVt_5Q',
  'https://www.youtube.com/watch?v=pAWqwR5AMy8',
  'https://www.youtube.com/watch?v=hlhfPOEaWSw',
  'https://www.youtube.com/watch?v=1QuZRjREAEY',
  // SEO
  'https://abdullahgul12.github.io/CV/images/profile.jpg',
];

// Other external URLs that are allowed to appear in the source.
const ALLOWED_PREFIXES = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://www.youtube-nocookie.com/embed/',
  'https://i.ytimg.com/vi/',
  'https://abdullahgul12.github.io/CV/', // the site's own canonical / og:url
  'http://www.w3.org/', // XML namespace in favicon.svg, not a link
];

const TEXT_EXT = new Set(['.html', '.js', '.css', '.ts', '.tsx', '.svg', '.json']);

function readTree(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...readTree(p));
    else if (TEXT_EXT.has(extname(p))) out.push({ path: p.slice(root.length + 1), text: readFileSync(p, 'utf8') });
  }
  return out;
}

// Removes // line comments and /* block */ comments (but not "://" in URLs).
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');

const dist = readTree(join(root, 'dist'));
const source = [
  ...readTree(join(root, 'src')),
  ...readTree(join(root, 'public')),
  { path: 'index.html', text: readFileSync(join(root, 'index.html'), 'utf8') },
];

let failed = false;
const fail = (msg) => {
  failed = true;
  console.error(`FAIL  ${msg}`);
};

if (dist.length === 0) fail('dist/ not found — run `npm run build` first');

// 1. Every required URL appears exactly in dist/ and in the source.
// A match must not be followed by more URL characters, so a longer or altered URL does not count.
const hasExact = (files, url) => {
  const re = new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![A-Za-z0-9_\\-/?=&%.])');
  return files.some((f) => re.test(f.text));
};
for (const url of REQUIRED) {
  const inDist = hasExact(dist, url);
  const inSrc = hasExact(source, url);
  if (inDist && inSrc) console.log(`ok    ${url}`);
  else fail(`${url}  (dist: ${inDist ? 'yes' : 'MISSING'}, source: ${inSrc ? 'yes' : 'MISSING'})`);
}

// 2. No other external URLs in the source (comments ignored).
// dist/ JS is not scanned here because bundled libraries (React etc.) embed their own doc URLs.
const urlRe = /https?:\/\/[^\s"'`<>)\\]+/g;
const filesToScan = [...source, ...dist.filter((f) => f.path.endsWith('.html'))];
const unexpected = new Set();
for (const f of filesToScan) {
  for (const url of stripComments(f.text).match(urlRe) ?? []) {
    const known = REQUIRED.includes(url) || ALLOWED_PREFIXES.some((p) => url.startsWith(p));
    if (!known) unexpected.add(`${url}  (in ${f.path})`);
  }
}
for (const u of unexpected) fail(`unexpected external URL: ${u}`);

console.log(
  failed
    ? '\nLink check FAILED'
    : `\nLink check passed: ${REQUIRED.length} required URLs present exactly; no unexpected external URLs.`,
);
process.exit(failed ? 1 : 0);
