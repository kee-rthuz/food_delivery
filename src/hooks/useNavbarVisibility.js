import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavbarVisibility = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hideNavbarPaths = ['/menu'];
    const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
    setShowNavbar(!shouldHideNavbar);
  }, [location]);

  return showNavbar;
};