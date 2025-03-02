import * as React from 'react';
import { box } from './home.style';
import { useNavigate } from 'react-router-dom';
import SliderComponent from '../components/slider/slider.component';
import Nostalgia from '../components/nostalgia/nostalgia.component';
import CategorySlider from '../components/categoriesCarousel/categoriesCarousel.component';
import Faq from '../components/faq/faq.component';
import GetTheLook from '../components/getTheLook/getTheLook.component';
import ExclusiveCircle from '../components/exclusiveCircle/exclusiveCircle';

export const HomePage = (): React.ReactNode => {
	const navigate = useNavigate();

	return (
		<div className={box}>
			<SliderComponent />
			<Nostalgia />
			<CategorySlider />
			<GetTheLook />
			<ExclusiveCircle />
			<Faq />
		</div>
	);
};
