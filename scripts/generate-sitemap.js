import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';

const routes = [
  '/',
  '/releases',
  '/artists',
  '/events',
  '/mixes',
  '/submissions',
  '/submissions/success',
  '/catalogue',
  '/visual-diary',
  '/sitemap',
  '/about',
  '/contact',
  '/press-kits',
  '/collaborate',
  '/newsletter',
  '/legal/privacy',
  '/legal/terms'
];

const hostname = 'https://www.blisssoundrecords.com';

(async () => {
  const smStream = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./public/sitemap.xml');
  smStream.pipe(writeStream);
  routes.forEach((url) => smStream.write({ url, changefreq: 'weekly', priority: url === '/' ? 1 : 0.7 }));
  smStream.end();
  await streamToPromise(smStream);
  console.log('sitemap.xml generated');
})();
