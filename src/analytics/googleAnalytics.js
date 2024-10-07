import ReactGA from "react-ga4";
import { GA_TRACKING_ID } from "../utils/constants";

export const initialiseGA = () => {
  if (!GA_TRACKING_ID) {
    console.log("Tracking ID not found");
    return;
  }
  ReactGA.initialize(GA_TRACKING_ID);
};

// track page view
export const trackPageView = (screenName) => {
  ReactGA.send({ hitType: "pageview", page: screenName });
};

// track click event
export const trackClickEvent = (catagory, label) => {
  ReactGA.event({
    catagory,
    label,
    action: "click",
  });
};
