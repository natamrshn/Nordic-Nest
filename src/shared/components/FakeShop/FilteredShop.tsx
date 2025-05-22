import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../productCard/productCard.component';
import SidebarFilter from './SideBar';

interface Category {
	id: number;
	title: string;
	type: string;
}

interface Product {
	id: string;
	title: string;
	article: string;
	price: number;
	mainImage: string;
	category: string;
	isNew: boolean;
}

const FilteredProductsPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [categories, setCategories] = useState<Category[]>([]);
	const [selectedIds, setSelectedIds] = useState<number[]>([]);
	const [groupedCategories, setGroupedCategories] = useState<{
		[type: string]: Category[];
	}>({});
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [minPriceLimit, setMinPriceLimit] = useState(0);
  const [maxPriceLimit, setMaxPriceLimit] = useState(1000);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);


	// Загружаем выбранные категории из URL
	useEffect(() => {
		const categoryIds = searchParams.get('categoryIds');
		if (categoryIds) {
			const ids = categoryIds
				.split(',')
				.map((id) => parseInt(id, 10))
				.filter((n) => !isNaN(n));
			setSelectedIds(ids);
		}
	}, [searchParams]);

	// Загружаем категории с сервера
	useEffect(() => {
		fetch(
			'http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/categories?page_size=50',
		)
			.then((res) => {
				if (!res.ok) throw new Error('Ошибка загрузки категорий');
				return res.json();
			})
			.then((data) => {
				setCategories(data.content);
				const grouped: { [type: string]: Category[] } = {};
				data.content.forEach((cat: Category) => {
					if (!grouped[cat.type]) grouped[cat.type] = [];
					grouped[cat.type].push(cat);
				});
				setGroupedCategories(grouped);
			})
			.catch((err: Error) => console.error(err));
	}, []);

	// Загружаем продукты по выбранным категориям
useEffect(() => {
	if (selectedIds.length === 0) {
		setProducts([]);
		setLoading(false);
		return;
	}

	setLoading(true);
	setError(null);
	const idsString = selectedIds.join(',');

	fetch(
		`http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/products/search?categoryIds=${idsString}`,
	)
		.then((res) => {
			if (!res.ok) throw new Error('Ошибка загрузки продуктов');
			return res.json();
		})
		.then((data) => {
			const loadedProducts: Product[] = Array.isArray(
				data.products?.content,
			)
				? data.products.content
				: [];

			setProducts(loadedProducts);

			// Определяем min/max цены
			if (loadedProducts.length > 0) {
				const prices = loadedProducts.map((p) => p.price);
				const min = Math.min(...prices);
				const max = Math.max(...prices);
				setMinPriceLimit(min);
				setMaxPriceLimit(max);
				setPriceRange([min, max]); // Установим по умолчанию весь диапазон
			}

			setLoading(false);
		})
		.catch((err: Error) => {
			setError(err.message);
			setLoading(false);
		});
}, [selectedIds]);


	const toggleSelectedId = (id: number) => {
		const newSelected = selectedIds.includes(id)
			? selectedIds.filter((i) => i !== id)
			: [...selectedIds, id];
		setSelectedIds(newSelected);
		setSearchParams({ categoryIds: newSelected.join(',') });
  };
  
const visibleProducts = products.filter(
	(product) =>
		product.price >= priceRange[0] && product.price <= priceRange[1],
);

	return (
		<div style={{ fontFamily: 'Arial, sans-serif' }}>
			{/* Кнопка фильтра (открыть) */}
			{!isSidebarOpen && (
				<button
					onClick={() => setIsSidebarOpen(true)}
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
					<svg
						width="20"
						height="20"
						fill="white"
						viewBox="0 0 24 24"
					>
						<path d="M3 4h18v2H3V4zm4 6h10v2H7v-2zm2 6h6v2h-6v-2z" />
					</svg>
				</button>
			)}

			{/* 👉 ВСТАВЛЯЕМ SidebarFilter */}
			<SidebarFilter
				groupedCategories={groupedCategories}
				selectedIds={selectedIds}
				toggleSelectedId={toggleSelectedId}
				onClose={() => setIsSidebarOpen(false)}
				isOpen={isSidebarOpen}
				minPriceLimit={minPriceLimit}
				maxPriceLimit={maxPriceLimit}
				priceRange={priceRange}
				setPriceRange={setPriceRange}
			/>

			{/* Контент товаров */}
			<div style={{ padding: '20px', marginTop: '140px' }}>
				<h2>Результаты</h2>
				{loading && <div>Загрузка товаров...</div>}
				{error && <div style={{ color: 'red' }}>Ошибка: {error}</div>}
				{!loading && products.length === 0 && (
					<p>Нет товаров по выбранным категориям.</p>
				)}

				<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
					{visibleProducts.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							mainImage={
								product.mainImage ||
								'https://via.placeholder.com/250'
							}
							title={product.title}
							price={product.price}
							category={product.category || 'Uncategorized'}
							isNew={product.isNew || false}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilteredProductsPage;
