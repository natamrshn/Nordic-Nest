import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '~/assets/NordicNest.svg';
import { box, section } from './header.styles';
import SearchBar from './components/searchBar/searchbar.component';
import Navigation from './components/navigation/navigation.component';
import UserActions from './components/userActions/userActions.component';

const Header: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className={box}>
			<div className={section}>
				<div>
					<Link to={'/'}>
						<Logo />
					</Link>
				</div>
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
};

export default Header;
