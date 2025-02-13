import { useEffect } from 'react';
import { useThemeStore } from '~/shared/stores/theme.store';

export const useScroll = () => {
	const toggleTheme = useThemeStore((state) => state.toggleTheme);

	useEffect(() => {
		const handleScroll = () => {
			toggleTheme(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [toggleTheme]);
};
