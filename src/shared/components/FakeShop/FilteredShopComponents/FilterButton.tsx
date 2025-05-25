import filterIcon from '../../../../assets/icon-filter.svg?url';

const FilterButton = ({ onClick }: { onClick: () => void }) => (
	<button
		onClick={onClick}
		style={{
			position: 'fixed',
			top: '140px',
			left: '20px',
			zIndex: 1001,
			padding: '10px',
			border: 'none',
			borderRadius: '50%',
			width: '44px',
			height: '44px',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}
	>
		<img
			src={filterIcon}
			alt="filter"
			style={{ width: '20px', height: '20px',}}
    />
	</button>
);

export default FilterButton;
