import { Link } from 'react-router-dom';
import { navigation, navigationItem } from './navigation.styles';
import { useThemeStore } from '~shared/stores/theme.store';
import React = require('react');

const NAV_LINKS = [
	{ path: '/shop', label: 'Shop' },
	{ path: '/about', label: 'About Us' },
	{ path: '/find-us', label: 'Find Us' },
];

const Navigation: React.FC = React.memo(() => {
	const isLight = useThemeStore((state) => state.isLight);

	return (
		<ul className={navigation}>
			{NAV_LINKS.map(({ path, label }) => (
				<li key={path} className={navigationItem(isLight)}>
					<Link to={path}>{label}</Link>
				</li>
			))}
		</ul>
	);
});

export default Navigation;
