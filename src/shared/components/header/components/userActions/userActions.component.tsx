import { box } from './userActions.styles';
import { Link } from 'react-router-dom';

import FavIconLight from '~/assets/icon-heart.svg';
import FavIconDark from '~/assets/icon-heart-dark.svg';
import LogIconLight from '~/assets/icon-login.svg';
import LogIconDark from '~/assets/icon-login-dark.svg';
import CartIconLight from '~/assets/icon-cart.svg';
import CartIconDark from '~/assets/icon-cart-dark.svg';
import { useThemeStore } from '~shared/stores/theme.store';
import { useState } from 'react';
import LoginModal from '~modules/auth/pages/login.page';

export const UserActions: React.FC = () => {
	const isLight = useThemeStore((state) => state.isLight);
	const [isLoginOpen, setLoginOpen] = useState(false);

	const openLogin = () => setLoginOpen(true);
	const closeLogin = () => setLoginOpen(false);

	return (
		<div className={box}>
			<Link to={'/favourites'}>
				{isLight ? <FavIconDark /> : <FavIconLight />}
			</Link>

			<div onClick={openLogin} style={{ cursor: 'pointer' }}>
				{isLight ? <LogIconDark /> : <LogIconLight />}
			</div>

			<Link to={'/cart'}>
				{isLight ? <CartIconDark /> : <CartIconLight />}
			</Link>

			{isLoginOpen && <LoginModal onClose={closeLogin} />}
		</div>
	);
};

export default UserActions;
