import { input, search, searchIcon } from './searchbar.styles';
import SearchIcon from '~/assets/icon-search.svg';

const SearchBar: React.FC = () => {
	return (
    <div className={search}>
      <div className={searchIcon}>

			<SearchIcon />
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
