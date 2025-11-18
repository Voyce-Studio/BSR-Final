# Bliss Sound Records SPA

Single-page React + Vite experience with animated gradients, frosted glass UI, and Hostinger-ready server hooks.

## Asset placeholders

- Every image call-site renders through `ImageSurface`, which shows an animated gradient until the referenced file exists.
- Labels inside each gradient tell you where to drop the actual asset (e.g., `src/assets/images/hero.webp` for the hero, `src/assets/images/parallax-1.webp` for long textures, release art paths from `featuredReleases` constants).
- Swap the gradient with your imagery by placing the real files at the hinted paths; they will fade in automatically.

## Logos & favicons

- Navbar uses `/public/logo.svg`.
- Favicon + Apple icon use `/public/favicon.svg`, which wraps the BSR vinyl mark inside a black rounded square. Swap `/public/BSR-VINYL-SVG.svg` if you refresh the logo artwork—the favicon will pick it up automatically. Tab color is set to black via `<meta name="theme-color" content="#000000">`.

## PHP upload limits on Hostinger

The demo intake (`server/submit_demo.php`) accepts WAV uploads up to 300 MB. On Hostinger:

1. In hPanel go to **Advanced → PHP Configuration → PHP Options** and set:
   - `upload_max_filesize = 300M`
   - `post_max_size = 310M`
   - `max_execution_time = 120`
2. If you need per-site overrides, add to `.htaccess` (outside `/public`) or a custom `php.ini` placed next to `submit_demo.php`:

```
php_value upload_max_filesize 300M
php_value post_max_size 310M
php_value max_execution_time 120
```

3. Ensure `/server/uploads` stays writable and protected (`server/uploads/.htaccess` already blocks direct execution).

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Production build + sitemap generation |
| `npm run sitemap` | Regenerate `public/sitemap.xml` |
| `npm run lint` | ESLint across `src` |

## Forms & autoresponders

- `server/contact.php`, `server/events_request.php`, `server/newsletter.php`, and `server/submit_demo.php` all send primary mail to `blisssoundrecords@gmail.com`, CC `hello@blisssoundrecords.com`, and respond from `hello@blisssoundrecords.com` so Hostinger deliverability stays consistent.
- Contact + demo submissions reply to the sender with a friendly confirmation; newsletter + host requests remain silent externally.
- If you swap sender addresses, update the `$fromAddress` / `$from_email` constants and the `Cc` line per script.

## Artist roster & spotlight

- `src/pages/Artists.jsx` drives three areas:
  - Spotlight cards (`SPOTLIGHT_COPY`) for upcoming releases. Update those blurbs when you revise the launch stories.
  - Resident / incoming grids use `artistList` from `src/utils/constants.js`. If you don’t have bios yet, just leave the names; replacing `summary` will pipe straight into the UI when you’re ready.
  - TYSS currently shows a disabled “Press kit” button until a real PDF is dropped inside `/public/press_kit/tyss`.
- Visual Diary (`/visual-diary`) pulls from `/public/press_kit/brand-kit` plus the per-artist folders, so swapping PDFs automatically updates the download table.

## Social links

- All template links to Instagram use `https://www.instagram.com/blisssoundrecords`.
- YouTube buttons (Events page and Social footer) now use the label channel: `https://www.youtube.com/channel/UCetKatn1FSCPTdPzWT9viFA`. Change the `socials.youtube` entry in `src/utils/constants.js` if you rebrand the channel slug.

## Deploy checklist

1. Drop final imagery into the paths referenced by each `ImageSurface` label.
2. Replace `/public/BSR.svg` with your real white logomark if needed.
3. Update the discography artwork placeholders located under `/public/artwork/miss-bliss/te-quero.png` and `/public/artwork/miss-space/drowning-in-the-dark.png` (3000×3000 PNG).
4. Configure PHP limits (above) and point submissions endpoint to a mailbox you monitor.
5. Upload `/public/.htaccess`, `/public/robots.txt`, thank-you pages, and `/public/sitemap.xml` to Hostinger for SPA routing + SEO.
