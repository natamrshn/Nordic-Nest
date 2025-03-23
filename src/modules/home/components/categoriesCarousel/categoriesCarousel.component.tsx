import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
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
import { getAllCategories } from '~shared/services/categorios.service';



interface Category {
	id: number;
	title: string;
	type: string;
	imageUrl: string;
}

const CategorySlider: React.FC = () => {
	const sliderRef = useRef<Slider | null>(null);
	const [categories, setCategories] = useState<Category[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getAllCategories()
			.then(setCategories)
			.catch(() => {
				setIsError(true);
				setCategories([]);
			})
			setIsLoading(false);
			
	}, []);

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
		
				<h2 style={h2}>EXPLORE CATEGORIES</h2>
				<div className={arrowsContainer}>
					<button className={`${slickArrow} ${prevArrowStyle}`} onClick={goPrev}>
						<img src={left} alt="Prev" />
					</button>
					<button className={`${slickArrow} ${nextArrowStyle}`} onClick={goNext}>
						<img src={right} alt="Next" />
					</button>
				</div>
				
			</div>
			<div className={sliderContainer}>

				{isLoading && <p>Loading categories...</p>}
				{isError && <p>Error loading categories.</p>}
				{!isLoading && !isError && (
					<Slider ref={sliderRef} {...settings}>						
						{categories.map((category) => (
							<div key={category.id}>
								<img src={category.imageUrl} alt={category.title} style={{ width: "330px", height: "330px" }} />
     							<p>{category.title}</p>
							</div>
						))}
					</Slider>
				)}
			</div>
		</>
	);
};

export default CategorySlider;
