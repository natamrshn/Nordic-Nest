import React, { useEffect, useState } from 'react';

const AnimatedProgressList = ({
	designParameters,
}: {
	designParameters: Record<string, number>;
}) => {
	const [animatedValues, setAnimatedValues] = useState<
		Record<string, number>
	>({});

	useEffect(() => {
		const entries = Object.entries(designParameters);
		entries.forEach(([style, value], index) => {
			setTimeout(() => {
				setAnimatedValues((prev) => ({ ...prev, [style]: value }));
			}, index * 700); // задержка 700мс между строками
		});
	}, [designParameters]);

	return (
		<ul style={{ listStyle: 'none', padding: 0 }}>
			{Object.entries(designParameters).map(([style, value], index) => {
				const percent = (animatedValues[style] ?? 0) * 100;
				return (
					<li
						key={style}
						style={{
							marginBottom: '16px',
							opacity: animatedValues[style] ? 1 : 0.4,
							transition: 'opacity 0.6s ease',
						}}
					>
						<div style={{ marginBottom: '4px' }}>
							<strong>{style}</strong>: {percent.toFixed(1)}%
						</div>
						<div
							style={{
								width: '100%',
								height: '12px',
								backgroundColor: '#B8ADAD',
								borderRadius: '6px',
								overflow: 'hidden',
							}}
						>
							<div
								style={{
									width: `${percent}%`,
									height: '100%',
									backgroundColor: '#31251F',
									transition: 'width 2s ease-in-out',
								}}
							/>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default AnimatedProgressList;
