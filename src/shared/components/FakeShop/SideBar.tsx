import React from 'react';
import { Range, getTrackBackground } from 'react-range';

interface Category {
	id: number;
	title: string;
	type: string;
}

interface SidebarFilterProps {
	groupedCategories: { [type: string]: Category[] };
	selectedIds: number[];
	toggleSelectedId: (id: number) => void;
	onClose: () => void;
	isOpen: boolean;

	minPriceLimit: number;
	maxPriceLimit: number;
	priceRange: [number, number];
	setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const STEP = 10;

const SidebarFilter: React.FC<SidebarFilterProps> = ({
	groupedCategories,
	selectedIds,
	toggleSelectedId,
	onClose,
	isOpen,
	minPriceLimit,
	maxPriceLimit,
	priceRange,
	setPriceRange,
}) => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: isOpen ? 0 : '-300px',
				width: '280px',
				height: '100%',
				backgroundColor: '#f9f9f9',
				boxShadow: '2px 0 6px rgba(0,0,0,0.1)',
				padding: '20px',
				overflowY: 'auto',
				transition: 'left 0.3s ease',
				zIndex: 1000,
			}}
		>
			<button
				onClick={onClose}
				style={{
					position: 'absolute',
					top: '10px',
					right: '10px',
					background: 'transparent',
					border: 'none',
					cursor: 'pointer',
					padding: '5px',
				}}
				title="Закрыть"
			>
				<svg width="24" height="24" fill="#333" viewBox="0 0 24 24">
					<path
						d="M18 6L6 18M6 6l12 12"
						stroke="#333"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</button>

			<h2 style={{ marginTop: '10px' }}>Фильтр</h2>
			<div style={{ marginTop: '20px' }}>
				<h3>Цена</h3>

				<Range
					step={STEP}
					min={minPriceLimit}
					max={maxPriceLimit}
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
									colors: ['#ccc', '#548bf4', '#ccc'],
									min: minPriceLimit,
									max: maxPriceLimit,
								}),
								borderRadius: '4px',
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
								backgroundColor: '#548bf4',
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
									top: '-28px',
									color: '#fff',
									fontWeight: 'bold',
									fontSize: '12px',
									fontFamily: 'Arial,Helvetica,sans-serif',
									padding: '4px',
									borderRadius: '4px',
									backgroundColor: '#548bf4',
								}}
							>
								{priceRange[index]}
							</div>
						</div>
					)}
				/>

				<p>
					От {priceRange[0]} до {priceRange[1]}
				</p>
      </div>
      {/* Фильтр по категориям */}
			{Object.entries(groupedCategories).map(([type, cats]) => (
				<div key={type} style={{ marginBottom: '16px', marginTop: '20px' }}>
					<h3>{type}</h3>
					{cats.map((cat) => (
						<label
							key={cat.id}
							style={{
								display: 'block',
								marginBottom: '6px',
								cursor: 'pointer',
							}}
						>
							<input
								type="checkbox"
								checked={selectedIds.includes(cat.id)}
								onChange={() => toggleSelectedId(cat.id)}
								style={{ marginRight: '6px' }}
							/>
							{cat.title}
						</label>
					))}
				</div>
			))}

			{/* Диапазонный ползунок react-range */}
		</div>
	);
};

export default SidebarFilter;
