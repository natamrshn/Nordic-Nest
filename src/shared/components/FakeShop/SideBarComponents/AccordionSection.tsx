import React, { useRef } from 'react';

interface AccordionSectionProps {
	title: string;
	isOpen: boolean;
	onToggle: () => void;
	children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
	title,
	isOpen,
	onToggle,
	children,
}) => {
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div style={{ marginBottom: '16px', marginTop: '20px' }}>
			<button
				onClick={onToggle}
				style={{
					background: 'none',
					border: 'none',
					cursor: 'pointer',
					padding: 0,
					fontSize: '16px',
					fontWeight: 'bold',
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
					alignItems: 'center',
				}}
			>
				<span>{title}</span>
				<svg
					style={{
						transition: 'transform 0.3s ease',
						transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
					}}
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="6 9 12 15 18 9" />
				</svg>
			</button>
			<div
				ref={contentRef}
				style={{
					maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
					overflow: 'hidden',
					transition: 'max-height 0.3s ease',
				}}
			>
				<div style={{ marginTop: '10px' }}>{children}</div>
			</div>
		</div>
	);
};

export default AccordionSection;
