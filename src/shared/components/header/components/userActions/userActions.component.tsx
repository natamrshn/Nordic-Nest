import FavIcon from '~/assets/icon-heart.svg';
import LogIcon from '~/assets/icon-login.svg';
import CartIcon from '~/assets/icon-cart.svg';
import { box } from './userActions.styles';
import { Link } from 'react-router-dom';

const UserActions: React.FC = () => {
	return (
		<div className={box}>
			<Link to={'/favourites'}>
				<FavIcon />
			</Link>
			<Link to={'/login'}>
				<LogIcon />
			</Link>
			<Link to={'/cart'}>
				<CartIcon />
			</Link>
		</div>
	);
};
export default UserActions;
