import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '~shared/components/productCard/productCard.component';
import { searchProducts } from '~shared/services/protucts.service';

const SearchResultsPage = () => {
	const location = useLocation();
	const [products, setProducts] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const searchParams = new URLSearchParams(location.search);
			const page = searchParams.get('page_number') || 0;
			const pageSize = searchParams.get('page_size') || 10;

			const queryParams: Record<string, string> = {};
			searchParams.forEach((value, key) => {
				if (key !== 'page_number' && key !== 'page_size') {
					queryParams[key] = value;
				}
			});

			try {
				const result = await searchProducts(
					queryParams,
					page,
					pageSize,
				);
				setProducts(result);
			} catch (err) {
				setError((err as Error).message);
			}
		};

		fetchData();
	}, [location.search]);

	if (error) return <div>Ошибка: {error}</div>;

	return (
		<div style={{ padding: '2rem' }}>
			<h2>Результаты поиска</h2>
			{products.length === 0 ? (
				<div
					style={{
						marginTop: '3rem',
						textAlign: 'center',
						fontSize: '1.5rem',
            color: '#555',
            height: '50vh',
					}}
				>
					😔 К сожалению, ничего не найдено по вашему запросу.
					<br />
					Попробуйте изменить фильтры или использовать другие ключевые
					слова.
				</div>
			) : (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '2rem',
						marginTop: '2rem',
					}}
				>
					{products.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							mainImage={product.mainImage}
							title={product.title}
							price={product.price}
							category={product.category}
							isNew={product.isNew}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchResultsPage;
