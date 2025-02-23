import * as React from 'react';
import { box } from './home.style';
import { useNavigate } from 'react-router-dom';
import SliderComponent from '../components/slider/slider.component';
import Nostalgia from '../components/nostalgia/nostalgia.component';
import CategorySlider from '../components/categoriesCarousel/categoriesCarousel.component';

export const HomePage = (): React.ReactNode => {
	const navigate = useNavigate();

	return (
		<div className={box}>
			<SliderComponent />
			<Nostalgia />
			<CategorySlider />
		</div>
	);
};
