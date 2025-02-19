import { useEffect, useState } from 'react';
import { useThemeStore } from '~/shared/stores/theme.store';


export const useScroll = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const toggleTheme = useThemeStore((state) => state.toggleTheme);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 50;
			setIsScrolled(scrolled);
			toggleTheme(scrolled);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [toggleTheme]);

	return isScrolled;
};
