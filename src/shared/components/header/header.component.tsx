import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoDark from '~/assets/nordic-nest-dark.svg';
import LogoLight from '~/assets/nordic-nest.svg';
import { ai, box, section } from './header.styles';
import SearchBar from './components/searchBar/searchbar.component';
import Navigation from './components/navigation/navigation.component';
import UserActions from './components/userActions/userActions.component';
import { useScroll } from '~shared/hooks/useScroll';
import { useThemeStore } from '~shared/stores/theme.store';
import AI from './components/ai/ai.component';

const LOGOS = {
	light: <LogoDark />,
	dark: <LogoLight />,
};

interface HeaderProps {
	onShopClick: () => void;
}

const Header: React.FC<HeaderProps> = React.memo(({ onShopClick }) => {
	const location = useLocation();
	const isHomePage = location.pathname === '/'; // Перевіряємо, чи це головна сторінка
	const isLight = useThemeStore((state) => state.isLight);

	// На головній сторінці тема змінюється, на інших завжди світла
	const currentTheme = isHomePage ? isLight : true;

	return (
		<div className={box(currentTheme)}>
			<div className={section}>
				<Link to={'/'}>{currentTheme ? LOGOS.light : LOGOS.dark}</Link>
				<div className="search">
					<SearchBar />
				</div>
			</div>
			<div className={ai}>
				<AI />
			</div>
			<div className={section}>
				<Navigation onShopClick={onShopClick} isModalOpen={false} />
				<UserActions />
			</div>
		</div>
	);
});

export default Header;
