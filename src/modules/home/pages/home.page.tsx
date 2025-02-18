import * as React from 'react';
import { box } from './home.style';
import { useNavigate } from 'react-router-dom';
import SliderComponent from '../components/slider/slider.component';

export const HomePage = (): React.ReactNode => {
	const navigate = useNavigate();

	return (
		<div className={box}>
			<SliderComponent />
		</div>
	);
};
