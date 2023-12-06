import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import Loglib from "@loglib/tracker/react"
export default function Analytics() {
  return (
    <>
      <VercelAnalytics />
      <Loglib config={{
        id:'textify_yarar'
      }}/>
    </>
  );
}
