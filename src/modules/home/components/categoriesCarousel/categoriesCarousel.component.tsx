import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import Slide1 from '~/assets/slider-1.png';
import Slide2 from '~/assets/slider-2.png';
import right from '~assets/icon-arrow-right.svg'

import { arrowsContainer, headerContainer, nextArrowStyle, prevArrowStyle, slickArrow, sliderContainer } from './categoriesCarousel.styles';
import { h2 } from '~shared/styles';

const slides = [Slide1, Slide2, Slide1, Slide2];

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
	<div className={`${slickArrow} ${nextArrowStyle}`} onClick={onClick}>
		<img src={right} alt="Next" />
	</div>
);

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
	<div className={`${slickArrow} ${prevArrowStyle}`} onClick={onClick}>
		<img src={right} alt="Prev" />
	</div>
);

const CategorySlider: React.FC = () => {
	const settings = {
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

  return (
		<>
			<div className={headerContainer}>
				<h2 style={h2}>EXPLORE CATEGORIES</h2>
				<div className={arrowsContainer}>
					<PrevArrow />
					<NextArrow />
				</div>
			</div>
			<div className={sliderContainer}>
				<Slider {...settings}>
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
