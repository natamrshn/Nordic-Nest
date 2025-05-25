import React from 'react';
import { Range, getTrackBackground } from 'react-range';

interface PriceFilterProps {
	priceRange: [number, number];
	setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
	minPrice: number;
	maxPrice: number;
}

const STEP = 10;

const PriceFilter: React.FC<PriceFilterProps> = ({
	priceRange,
	setPriceRange,
	minPrice,
	maxPrice,
}) => (
	<div style={{ marginTop: '20px' }}>
		<h3>Price</h3>
		<Range
			step={STEP}
			min={minPrice}
			max={maxPrice}
			values={priceRange}
			onChange={(values) => setPriceRange([values[0], values[1]])}
			renderTrack={({ props, children }) => (
				<div
					{...props}
					style={{
						...props.style,
						height: '6px',
						width: '100%',
						background: getTrackBackground({
							values: priceRange,
							colors: ['#31251F', '#31251F', '#31251F'],
							min: minPrice,
							max: maxPrice,
						}),
						borderRadius: '4px',
						marginTop: '40px',
					}}
				>
					{children}
				</div>
			)}
			renderThumb={({ props, index }) => (
				<div
					{...props}
					style={{
						...props.style,
						height: '24px',
						width: '24px',
						backgroundColor: '#31251F',
						borderRadius: '50%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						boxShadow: '0 2px 6px #AAA',
						cursor: 'pointer',
					}}
				>
					<div
						style={{
							position: 'absolute',
							top: '-24px',
							color: '#fff',
							fontWeight: 'bold',
							fontSize: '12px',
							padding: '4px',
							borderRadius: '4px',
							backgroundColor: '#31251F',
						}}
					>
						{priceRange[index]}
					</div>
				</div>
			)}
		/>
		<p style={{ marginTop: '15px' }}>
			From {priceRange[0]}$ to {priceRange[1]}$
		</p>
	</div>
);

export default PriceFilter;
