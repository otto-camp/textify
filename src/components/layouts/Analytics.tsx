import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import Loglib from '@loglib/tracker/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
export default function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <Loglib
        config={{
          id: 'textify_yarar',
        }}
      />
      <SpeedInsights />
    </>
  );
}
