const FilterButton = ({ onClick }: { onClick: () => void }) => (
	<button
		onClick={onClick}
		style={{
			position: 'fixed',
			top: '140px',
			left: '20px',
			zIndex: 1001,
			padding: '10px',
			background: '#007bff',
			color: '#fff',
			border: 'none',
			borderRadius: '50%',
			width: '44px',
			height: '44px',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
		title="Открыть фильтр"
	>
		<svg width="20" height="20" fill="white" viewBox="0 0 24 24">
			<path d="M3 4h18v2H3V4zm4 6h10v2H7v-2zm2 6h6v2h-6v-2z" />
		</svg>
	</button>
);

export default FilterButton;
