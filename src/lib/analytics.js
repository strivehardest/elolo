import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  if (process.env.NEXT_PUBLIC_GA_ID) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);
  }
};

// Log page views
export const logPageView = (url) => {
  if (process.env.NEXT_PUBLIC_GA_ID) {
    ReactGA.send({ hitType: 'pageview', page: url });
  }
};

// Log specific events
export const logEvent = (action, category, label, value) => {
  if (process.env.NEXT_PUBLIC_GA_ID) {
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  logEvent('click', 'Button', `${buttonName} - ${location}`);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  logEvent('submit', 'Form', formName);
};

// Track navigation
export const trackNavigation = (destination) => {
  logEvent('navigate', 'Navigation', destination);
};

// Track downloads
export const trackDownload = (fileName, category = 'Download') => {
  logEvent('download', category, fileName);
};

// Track contact form submissions
export const trackContactForm = (contactReason) => {
  logEvent('submit', 'Contact Form', contactReason);
};

// Track group interest
export const trackGroupInterest = (groupName) => {
  logEvent('interest', 'Group', groupName);
};

// Track event registration
export const trackEventRegistration = (eventName) => {
  logEvent('register', 'Event', eventName);
};