import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AwesomeIcon from '~/assets/awesome.svg';
import {
	box,
	divLogo,
	link,
	nav,
	spanLogo,
} from './header.styles';

const Header: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className={box}>
			<div className={divLogo}>
				<AwesomeIcon />
				<span className={spanLogo}>Awesome Store</span>
			</div>
			
				<div className={nav}>
					<Link className={link} to="/login">
						Login
					</Link>
				</div>
		</div>
	);
};

export default Header;
