import React from 'react';
import AccordionSection from './AccordionSection';

interface Props {
	availableAttributes: { [key: string]: string[] };
	selectedAttributes: { [key: string]: string[] };
	toggleAttributeValue: (attrName: string, value: string) => void;
	openSections: { [key: string]: boolean };
	toggleSection: (key: string) => void;
}

const AttributeFilterSection: React.FC<Props> = ({
	availableAttributes,
	selectedAttributes,
	toggleAttributeValue,
	openSections,
	toggleSection,
}) => (
	<>
		{Object.entries(availableAttributes).map(([attrName, values]) => (
			<AccordionSection
				key={attrName}
				title={attrName.toUpperCase()}
				isOpen={openSections[attrName]}
				onToggle={() => toggleSection(attrName)}
			>
				{values.map((value) => (
					<label
						key={value}
						style={{
							display: 'block',
							marginBottom: '6px',
							cursor: 'pointer',
						}}
					>
						<input
							type="checkbox"
							checked={
								selectedAttributes[attrName]?.includes(value) ||
								false
							}
							onChange={() =>
								toggleAttributeValue(attrName, value)
							}
							style={{ marginRight: '6px' }}
						/>
						{value}
					</label>
				))}
			</AccordionSection>
		))}
	</>
);

export default AttributeFilterSection;
