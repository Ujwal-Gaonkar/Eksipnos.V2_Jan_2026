import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Your GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-3MW4SSC7HR";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GoogleAnalytics = () => {
  const location = useLocation();
  const startTimeRef = useRef<number>(Date.now());
  const lastPathRef = useRef<string>("");

  useEffect(() => {
    // Don't load if no measurement ID
    if (!GA_MEASUREMENT_ID) {
      console.log("Google Analytics: Add your Measurement ID to enable tracking");
      return;
    }

    // Load gtag script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.hash,
    });

    // Track time spent on page when user leaves
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
      trackEvent("time_on_site", {
        time_seconds: timeSpent,
        time_formatted: formatTime(timeSpent),
      });
    };

    // Track time when visibility changes (tab switch)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
        trackEvent("page_hidden", {
          time_seconds: timeSpent,
          page: location.pathname + location.hash,
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.head.removeChild(script1);
    };
  }, []);

  // Track page views and time on each section
  useEffect(() => {
    const currentPath = location.pathname + location.hash;
    
    if (window.gtag) {
      // Track time spent on previous section
      if (lastPathRef.current && lastPathRef.current !== currentPath) {
        const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);
        trackEvent("section_time", {
          section: lastPathRef.current,
          time_seconds: timeSpent,
        });
      }

      // Reset timer for new section
      startTimeRef.current = Date.now();
      lastPathRef.current = currentPath;

      // Track page view
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: currentPath,
      });
    }
  }, [location]);

  return null;
};

// Format seconds to readable time
const formatTime = (seconds: number): string => {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
};

// Utility function to track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// Pre-defined events for common actions
export const analyticsEvents = {
  // Form events
  formStart: (formName: string) =>
    trackEvent("form_start", { form_name: formName }),
  formSubmit: (formName: string, course?: string) =>
    trackEvent("form_submit", { form_name: formName, course_interest: course }),
  formError: (formName: string, errors: string[]) =>
    trackEvent("form_error", { form_name: formName, error_fields: errors.join(", ") }),
  
  // Enquiry events
  enquirySubmit: (course: string) =>
    trackEvent("enquiry_submit", { course_interest: course }),
  enquiryStart: () =>
    trackEvent("enquiry_start", { timestamp: new Date().toISOString() }),
  
  // WhatsApp events
  whatsappClick: (course?: string) =>
    trackEvent("whatsapp_click", { 
      location: "enquiry_form",
      course_interest: course || "not_selected",
    }),
  
  // Navigation events
  ctaClick: (ctaName: string, location?: string) =>
    trackEvent("cta_click", { cta_name: ctaName, location }),
  courseView: (courseName: string) =>
    trackEvent("course_view", { course_name: courseName }),
  
  // Contact events
  phoneClick: () => trackEvent("phone_click"),
  emailClick: () => trackEvent("email_click"),
  
  // Scroll events
  scrollToSection: (sectionName: string) =>
    trackEvent("scroll_to_section", { section: sectionName }),
  
  // Engagement events
  timeOnPage: (seconds: number, page: string) =>
    trackEvent("time_on_page", { 
      time_seconds: seconds, 
      time_formatted: formatTime(seconds),
      page,
    }),
};
