import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(process.env.GA_TRACKING_ID);
  }, []);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

export default Analytics;