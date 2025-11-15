import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.blisssoundrecords.com';

export default function SEO({
  title,
  description,
  path = '/',
  image = `${BASE_URL}/favicons/og.jpg`,
  imageAlt = 'Bliss Sound Records cover art',
  keywords = [],
  noIndex = false,
  structuredData,
  pixelId
}) {
  const url = `${BASE_URL}${path}`;
  const resolvedPixelId =
    pixelId ?? (typeof import.meta !== 'undefined' ? import.meta.env?.VITE_FACEBOOK_PIXEL_ID : undefined);

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={imageAlt} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      {structuredData &&
        (Array.isArray(structuredData) ? structuredData : [structuredData]).map((data, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(data)}
          </script>
        ))}
      {resolvedPixelId && (
        <>
          <script>
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${resolvedPixelId}');fbq('track','PageView');`}
          </script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${resolvedPixelId}&ev=PageView&noscript=1" />`
            }}
          />
        </>
      )}
    </Helmet>
  );
}
