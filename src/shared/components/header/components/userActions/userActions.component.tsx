import { box } from './userActions.styles';
import { Link } from 'react-router-dom';

import FavIconLight from '~/assets/icon-heart.svg';
import FavIconDark from '~/assets/icon-heart-dark.svg';
import LogIconLight from '~/assets/icon-login.svg';
import LogIconDark from '~/assets/icon-login-dark.svg';
import CartIconLight from '~/assets/icon-cart.svg';
import CartIconDark from '~/assets/icon-cart-dark.svg';
import { useThemeStore } from '~shared/stores/theme.store';

const UserActions: React.FC = () => {
	const isLight = useThemeStore((state) => state.isLight);

	return (
		<div className={box}>
			<Link to={'/favourites'}>
				{isLight ? <FavIconDark /> : <FavIconLight />}
			</Link>
			<Link to={'/login'}>
				{isLight ? <LogIconDark /> : <LogIconLight />}
			</Link>
			<Link to={'/cart'}>
				{isLight ? <CartIconDark /> : <CartIconLight />}
			</Link>
		</div>
	);
};

export default UserActions;
