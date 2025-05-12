import { useThemeStore } from '~shared/stores/theme.store';
import { input, search, searchIcon } from './searchbar.styles';
import SearchIcon from '~/assets/icon-search.svg';
import SeearchIconDark from '~/assets/icon-serch-dark.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBar: React.FC = () => {
	const isLight = useThemeStore((state) => state.isLight);
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && searchText.trim()) {
			// Пример запроса с минимальными параметрами
			const params = new URLSearchParams({
				searchText,
			});

			navigate(`/products/search?${params.toString()}`);
		}
	};

	return (
		<div className={search}>
			<div className={searchIcon}>
				{isLight ? <SeearchIconDark /> : <SearchIcon />}
			</div>

			<input
				type="text"
				placeholder="What can we help you find?"
				className={input(isLight)}
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};

export default SearchBar;
