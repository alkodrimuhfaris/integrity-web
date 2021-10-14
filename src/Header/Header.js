import React from 'react';
import {Helmet} from 'react-helmet';

export default function Header() {
  const GA_TRACKING_ID = process.env.REACT_APP_G_ANALYTICS;

  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
      </script>
    </Helmet>
  );
}
