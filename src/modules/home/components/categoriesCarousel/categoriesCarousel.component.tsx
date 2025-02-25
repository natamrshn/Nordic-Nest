import React, { useRef } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import Slide1 from '~/assets/slider-1.png';
import Slide2 from '~/assets/slider-2.png';
import right from '~assets/icon-arrow-right.svg?url';
import left from '~assets/icon-arrow-left.svg?url';

import {
	arrowsContainer,
	headerContainer,
	nextArrowStyle,
	prevArrowStyle,
	slickArrow,
	sliderContainer,
} from './categoriesCarousel.styles';
import { h2 } from '~shared/styles';

const slides = [Slide1, Slide2, Slide1, Slide2];

const CategorySlider: React.FC = () => {
	const sliderRef = useRef<Slider | null>(null);

	const goNext = () => sliderRef.current?.slickNext();
	const goPrev = () => sliderRef.current?.slickPrev();

	const settings = {
		infinite: true, // Бесконечный листинг
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false, // Отключаем стандартные стрелки
	};

	return (
		<>
			<div className={headerContainer}>
				<h2 style={h2}>EXPLORE CATEGORIES</h2>
				<div className={arrowsContainer}>
					<button
						className={`${slickArrow} ${prevArrowStyle}`}
						onClick={goPrev}
					>
						<img src={left} alt="Prev" />
					</button>
					<button
						className={`${slickArrow} ${nextArrowStyle}`}
						onClick={goNext}
					>
						<img src={right} alt="Next" />
					</button>
				</div>
			</div>
			<div className={sliderContainer}>
				<Slider ref={sliderRef} {...settings}>
					{slides.map((src, index) => (
						<div key={index}>
							<img src={src} alt={`Slide ${index + 1}`} />
							<p>Kitchen</p>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default CategorySlider;
