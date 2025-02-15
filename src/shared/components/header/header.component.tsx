import * as React from 'react';
import { Link } from 'react-router-dom';
import LogoDark from '~/assets/nordic-nest-dark.svg';
import LogoLight from '~/assets/nordic-nest.svg';
import { box, section } from './header.styles';
import SearchBar from './components/searchBar/searchbar.component';
import Navigation from './components/navigation/navigation.component';
import UserActions from './components/userActions/userActions.component';
import { useScroll } from '~shared/hooks/useScroll';
import { useThemeStore } from '~shared/stores/theme.store';

const LOGOS = {
	light: <LogoDark />,
	dark: <LogoLight />,
};

const Header: React.FC = React.memo(() => {
	useScroll();
	const isLight = useThemeStore((state) => state.isLight);

	return (
		<div className={box(isLight)}>
			<div className={section}>
				<Link to={'/'}>{isLight ? LOGOS.light : LOGOS.dark}</Link>
				<div className="search">
					<SearchBar />
				</div>
			</div>

			<div className={section}>
				<Navigation />
				<UserActions />
			</div>
		</div>
	);
});

export default Header;
