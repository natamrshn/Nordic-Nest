import React from 'react';
import AccordionSection from './AccordionSection';

interface Category {
	id: number;
	title: string;
	type: string;
}

interface Props {
	groupedCategories: { [type: string]: Category[] };
	selectedIds: number[];
	toggleSelectedId: (id: number) => void;
	openSections: { [key: string]: boolean };
	toggleSection: (key: string) => void;
}

const CategoryFilterSection: React.FC<Props> = ({
	groupedCategories,
	selectedIds,
	toggleSelectedId,
	openSections,
	toggleSection,
}) => (
	<>
		{Object.entries(groupedCategories).map(([type, cats]) => (
			<AccordionSection
				key={type}
				title={type}
				isOpen={openSections[type]}
				onToggle={() => toggleSection(type)}
			>
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
			</AccordionSection>
		))}
	</>
);

export default CategoryFilterSection;
