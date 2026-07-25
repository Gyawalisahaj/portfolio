"use client";

import { useEffect } from "react";

/**
 * Fires a single pageview beacon on mount. Failures are silent by design —
 * analytics should never be visible to a visitor, successful or not.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    fetch("/api/analytics/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer || null,
      }),
      keepalive: true,
    }).catch(() => {
      /* no-op */
    });
  }, []);

  return null;
}
