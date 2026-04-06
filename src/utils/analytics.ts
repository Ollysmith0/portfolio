/**
 * Google Analytics 4 Setup Guide
 * 
 * This file provides instructions for setting up Google Analytics 4 on ollysmith.store
 * 
 * STEP 1: Create GA4 Property
 * 1. Go to https://analytics.google.com/
 * 2. Click "Create" → "Property"
 * 3. Property name: "ollysmith.store"
 * 4. Reporting timezone: Your timezone
 * 5. Currency: USD (or your preference)
 * 6. Create property
 * 
 * STEP 2: Create Web Stream
 * 1. On the property, click "Create data stream"
 * 2. Select "Web"
 * 3. Website URL: "https://ollysmith.store"
 * 4. Stream name: "Web Stream"
 * 5. Create stream
 * 6. Copy the MEASUREMENT_ID (e.g., "G-XXXXXXXXXX")
 * 
 * STEP 3: Install Google Analytics Script
 * Add this script to your public/index.html <head>:
 * 
 *   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
 *   <script>
 *     window.dataLayer = window.dataLayer || [];
 *     function gtag(){dataLayer.push(arguments);}
 *     gtag('js', new Date());
 *     gtag('config', 'G-XXXXXXXXXX');
 *   </script>
 * 
 * Replace G-XXXXXXXXXX with your actual MEASUREMENT_ID
 * 
 * STEP 4: Verify Installation
 * 1. Visit https://ollysmith.store
 * 2. Go to Google Analytics → Real-time dashboard
 * 3. You should see 1 active user (yourself) within a few seconds
 * 
 * === Analytics Events to Track ===
 * 
 * Consider adding event tracking for:
 * - Contact form submissions
 * - WhatsApp link clicks
 * - Portfolio item visits
 * - Service inquiries
 * - Pricing section views
 * 
 * === Core Web Vitals Monitoring ===
 * 
 * GA4 automatically tracks:
 * - Largest Contentful Paint (LCP)
 * - First Input Delay (FID) / Interaction to Next Paint (INP)
 * - Cumulative Layout Shift (CLS)
 * 
 * View in Analytics → Reports → Engagement → Web Vitals
 * 
 * === Useful Dashboards ===
 * 
 * 1. Real-time: See live user activity
 * 2. Acquisition: Where users come from (organic search, social, direct)
 * 3. Behavior: Which pages users visit, scroll depth
 * 4. Conversions: Track contact form submissions, CTAs
 * 5. Tech: Device, browser, OS information
 */

/**
 * Example: Track custom event (add to components as needed)
 * 
 * import { useEffect } from 'react';
 * 
 * export function useGAnalytics() {
 *   useEffect(() => {
 *     const gtag = window.gtag;
 *     if (gtag) {
 *       gtag('event', 'contact_form_submit', {
 *         'service': 'shopify_store',
 *         'timestamp': new Date().toISOString()
 *       });
 *     }
 *   }, []);
 * }
 */

export const ANALYTICS_SETUP = {
  documentsionUrl: 'https://support.google.com/analytics/answer/10089681',
  measurementId: 'G-XXXXXXXXXX', // Replace with your actual ID
  events: {
    CONTACT_FORM_SUBMIT: 'contact_form_submit',
    WHATSAPP_CLICK: 'whatsapp_click',
    PORTFOLIO_VISIT: 'portfolio_visit',
    SERVICE_INQUIRY: 'service_inquiry',
    CALL_TO_ACTION: 'cta_click',
  },
};
