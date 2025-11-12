import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.blisssoundrecords.com';

export default function SEO({ title, description, path = '/' }) {
  const url = `${BASE_URL}${path}`;
  const image = `${BASE_URL}/favicons/og.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
