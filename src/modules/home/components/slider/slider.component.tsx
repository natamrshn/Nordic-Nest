import React from 'react';
import Slider from 'react-slick';
import Slide1 from '~/assets/slider1.png';
import Slide2 from '~/assets/slider2.png';
import Slide3 from '~/assets/slider3.png';
import Slide4 from '~/assets/slider4.png';
import Text from './components/text.component';

import { sliderContainer } from './slider.styles';

const slides = [Slide1, Slide2, Slide3, Slide4];

const SliderComponent: React.FC = () => {
	const settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<>
			<div className={sliderContainer}>
				<Text />

				<Slider {...settings}>
					{slides.map((src, index) => (
						<div key={index}>
							<img src={src} alt={`Slide ${index + 1}`} />
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default SliderComponent;
