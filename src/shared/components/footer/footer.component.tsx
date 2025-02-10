import * as React from 'react';
import { box, span } from './footer.styles';

const Footer: React.FC = () => {
	return (
		<footer className={box}>
			<span className={span}>COPYRIGHT</span>
		</footer>
	);
};

export default Footer;
