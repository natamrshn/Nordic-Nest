import React, { useRef } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import Slide1 from '~/assets/slider-1.png';
import Slide2 from '~/assets/slider-2.png';
import right from '~assets/icon-arrow-right.svg?url';
import left from '~assets/icon-arrow-left.svg?url';

import { h2 } from '~shared/styles';
import {
	headerContainer,
	arrowsContainer,
	slickArrow,
	prevArrowStyle,
	nextArrowStyle,
} from '../categoriesCarousel/categoriesCarousel.styles';
import { sliderContainer } from '../slider/slider.styles';
import ProductCard from '~shared/components/productCard/productCard.component';
import img from '~/assets/card-default.png?url';

const products = [
	{
		image: img,
		title: 'Product 1',
		price: 99,
		category: 'Kitchen',
		isNew: true,
	},
	{
		image: img,
		title: 'Product 2',
		price: 120,
		category: 'Living Room',
		isNew: false,
	},
	{
		image: img,
		title: 'Product 3',
		price: 80,
		category: 'Bedroom',
		isNew: true,
	},
	{
		image: 'image4.jpg',
		title: 'Product 4',
		price: 150,
		category: 'Office',
		isNew: false,
	},
];

const ItemsCarousel: React.FC = () => {
	const sliderRef = useRef<Slider | null>(null);

	const goNext = () => sliderRef.current?.slickNext();
	const goPrev = () => sliderRef.current?.slickPrev();

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<>
			<div className={headerContainer}>
				<h2 style={h2}>BUILT FOR A LIFETIME</h2>
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
					{products.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</Slider>
			</div>
		</>
	);
};

export default ItemsCarousel;
