import { useThemeStore } from '~shared/stores/theme.store';
import { input, search, searchIcon } from './searchbar.styles';
import SearchIcon from '~/assets/icon-search.svg';
import SeearchIconDark from '~/assets/icon-serch-dark.svg';

const SearchBar: React.FC = () => {
	const isLight = useThemeStore((state) => state.isLight);
	return (
		<div className={search}>
			<div className={searchIcon}>
				{isLight ? <SeearchIconDark /> : <SearchIcon />}
			</div>

			<input
				type="text"
				placeholder="What can we help you find?"
				className={input}
			/>
		</div>
	);
};

export default SearchBar;
