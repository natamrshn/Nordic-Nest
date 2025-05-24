import React, { useState } from 'react';
import PriceFilter from './SideBarComponents/PriceFilter';
import CategoryFilterSection from './SideBarComponents/CategoryFilterSection';
import AttributeFilterSection from './SideBarComponents/AttributeFilterSection';

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
	availableAttributes: { [key: string]: string[] };
	selectedAttributes: { [key: string]: string[] };
	toggleAttributeValue: (attrName: string, value: string) => void;
}

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
	availableAttributes,
	selectedAttributes,
	toggleAttributeValue,
}) => {
	const allKeys = [
		...Object.keys(groupedCategories),
		...Object.keys(availableAttributes),
	];

	const [openSections, setOpenSections] = useState(
		allKeys.reduce(
			(acc, key) => ({ ...acc, [key]: false }),
			{} as { [key: string]: boolean },
		),
	);

	// const [selectedAttributes, setSelectedAttributes] = useState<{
	// 	[key: string]: Set<string>;
	// }>({});

	const toggleSection = (key: string) => {
		setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	// const toggleAttributeValue = (attrName: string, value: string) => {
	// 	setSelectedAttributes((prev) => {
	// 		const current = prev[attrName] || new Set<string>();
	// 		const updated = new Set(current);
	// 		updated.has(value) ? updated.delete(value) : updated.add(value);
	// 		return { ...prev, [attrName]: updated };
	// 	});
	// };

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
				aria-label="Закрыть фильтр"
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

			<h2 style={{ marginTop: '10px' }}>Filter</h2>

			<PriceFilter
				priceRange={priceRange}
				setPriceRange={setPriceRange}
				minPrice={minPriceLimit}
				maxPrice={maxPriceLimit}
			/>

			<CategoryFilterSection
				groupedCategories={groupedCategories}
				selectedIds={selectedIds}
				toggleSelectedId={toggleSelectedId}
				openSections={openSections}
				toggleSection={toggleSection}
			/>

			<AttributeFilterSection
				availableAttributes={availableAttributes}
				selectedAttributes={selectedAttributes}
				toggleAttributeValue={toggleAttributeValue}
				openSections={openSections}
				toggleSection={toggleSection}
			/>
		</div>
	);
};

export default SidebarFilter;
