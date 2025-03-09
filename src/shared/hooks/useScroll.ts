import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useThemeStore } from '~/shared/stores/theme.store';

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') return; 
    const handleScroll = () => {
      const scrolled = window.scrollY > 34;
      setIsScrolled(scrolled);
      toggleTheme(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toggleTheme, pathname]);

  return isScrolled;
};
