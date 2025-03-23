import React, { useRef } from 'react';
import Slider from 'react-slick';
import right from '~assets/icon-arrow-right.svg?url';
import left from '~assets/icon-arrow-left.svg?url';

import { h2 } from '~shared/styles';
import ProductCard from '~shared/components/productCard/productCard.component';
import img from '~/assets/faq-image.png';
import {
	arrowsContainer,
	headerContainer,
	nextArrowStyle,
	prevArrowStyle,
	slickArrow,
	sliderContainer,
} from './itemsCarousel.styles';

const products = [
	{   id:1,
		mainImage: img,
		title: 'Product 1',
		price: 99,
		category: 'Kitchen',
		isNew: true,
	},
	{
		id:2,
		mainImage: img,
		title: 'Product 2',
		price: 120,
		category: 'Living Room',
		isNew: false,
	},
	{
		id:3,
		mainImage: img,
		title: 'Product 3',
		price: 80,
		category: 'Bedroom',
		isNew: true,
	},
	{
		id:4,
		mainImage: img,
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
