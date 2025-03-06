import * as React from 'react';
import { box } from './about-us.style';
import { useNavigate } from 'react-router-dom';

export const AboutUsPage = (): React.ReactNode => {
	const navigate = useNavigate();

	return <div className={box}>About us</div>;
};
