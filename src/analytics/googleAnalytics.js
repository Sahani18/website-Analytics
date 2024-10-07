import ReactGA from "react-ga4";
import { GA_TRACKING_ID } from "../utils/constants";

// Initialize Google Analytics
export const initialiseGA = () => {
  if (!GA_TRACKING_ID) {
    console.log("Tracking ID not found");
    return;
  }
  ReactGA.initialize(GA_TRACKING_ID);
};

// Track page view
export const trackPageView = (screenName) => {
  if (screenName) {
    ReactGA.send({ hitType: "pageview", page: screenName });
  } else {
    console.error("Screen name is required for pageview tracking");
  }
};

// Track click event
export const trackClickEvent = (category, label) => {
  if (!category || !label) {
    console.error("Category and label are required for click event tracking");
    return;
  }
  ReactGA.event({
    category: category, 
    action: "click",
    label: label,
  });
};
