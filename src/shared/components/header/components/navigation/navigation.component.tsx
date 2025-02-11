import { Link } from 'react-router-dom';
import { navigation, navigationItem } from './navigation.styles';

function Navigation() {
	return (
		<ul className={navigation}>
			<li className={navigationItem}>
				<Link to="/shop">Shop</Link>
			</li>
			<li className={navigationItem}>
				<Link to="/about">About Us</Link>
			</li>
			<li className={navigationItem}>
				<Link to="/find-us">Find Us</Link>
			</li>
		</ul>
	);
}

export default Navigation;
