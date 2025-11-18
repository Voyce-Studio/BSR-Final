import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';

const Home = React.lazy(() => import('../pages/Home.jsx'));
const Releases = React.lazy(() => import('../pages/Releases.jsx'));
const Artists = React.lazy(() => import('../pages/Artists.jsx'));
const Events = React.lazy(() => import('../pages/Events.jsx'));
const Mixes = React.lazy(() => import('../pages/Mixes.jsx'));
const Submissions = React.lazy(() => import('../pages/Submissions.jsx'));
const SubmissionsSuccess = React.lazy(() => import('../pages/SubmissionsSuccess.jsx'));
const Catalogue = React.lazy(() => import('../pages/Catalogue.jsx'));
const VisualDiary = React.lazy(() => import('../pages/VisualDiary.jsx'));
const SitemapPage = React.lazy(() => import('../pages/Sitemap.jsx'));
const About = React.lazy(() => import('../pages/About.jsx'));
const Contact = React.lazy(() => import('../pages/Contact.jsx'));
const PressKits = React.lazy(() => import('../pages/PressKits.jsx'));
const Collaborate = React.lazy(() => import('../pages/Collaborate.jsx'));
const Newsletter = React.lazy(() => import('../pages/Newsletter.jsx'));
const LegalPrivacy = React.lazy(() => import('../pages/LegalPrivacy.jsx'));
const LegalTerms = React.lazy(() => import('../pages/LegalTerms.jsx'));
const NotFound = React.lazy(() => import('../pages/NotFound.jsx'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'releases', element: <Releases /> },
      { path: 'artists', element: <Artists /> },
      { path: 'events', element: <Events /> },
      { path: 'mixes', element: <Mixes /> },
      { path: 'submissions', element: <Submissions /> },
      { path: 'submissions/success', element: <SubmissionsSuccess /> },
      { path: 'catalogue', element: <Catalogue /> },
      { path: 'visual-diary', element: <VisualDiary /> },
      { path: 'sitemap', element: <SitemapPage /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'press-kits', element: <PressKits /> },
      { path: 'collaborate', element: <Collaborate /> },
      { path: 'newsletter', element: <Newsletter /> },
      { path: 'legal/privacy', element: <LegalPrivacy /> },
      { path: 'legal/terms', element: <LegalTerms /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]
  }
]);
