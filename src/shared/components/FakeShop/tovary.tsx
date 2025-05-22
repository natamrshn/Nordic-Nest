import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Product {
	id: number;
	title: string;
	article: string;
	price: number;
	mainImage: string;
}

const ProductsPage = () => {
	const [searchParams] = useSearchParams();
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const categoryIds = searchParams.get('categoryIds');

		if (!categoryIds) {
			setError('Нет выбранных категорий');
			setLoading(false);
			return;
		}

		fetch(
			`http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/products/search?categoryIds=${categoryIds}`,
		)
			.then((res) => {
				if (!res.ok) throw new Error('Ошибка загрузки продуктов');
				return res.json();
			})
			.then((data) => {
				// Берём массив товаров из data.products.content
				setProducts(
					Array.isArray(data.products?.content)
						? data.products.content
						: [],
				);
				setLoading(false);
			})
			.catch((err: Error) => {
				setError(err.message);
				setLoading(false);
			});
	}, [searchParams]);

	if (loading) return <div>Загрузка товаров...</div>;
	if (error) return <div>Ошибка: {error}</div>;

	return (
		<div
			style={{
				padding: '20px',
				fontFamily: 'Arial, sans-serif',
				marginTop: '200px',
			}}
		>
			<h2>Товары по выбранным категориям</h2>
			{products.length === 0 && (
				<p>Нет товаров по выбранным категориям.</p>
			)}
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
				{products.map((product) => (
					<div
						key={product.id}
						style={{
							border: '1px solid #ccc',
							borderRadius: '8px',
							width: '250px',
							padding: '12px',
						}}
					>
						<img
							src={
								product.mainImage ||
								'https://via.placeholder.com/250'
							}
							alt={product.title}
							style={{
								width: '100%',
								height: '200px',
								objectFit: 'cover',
								borderRadius: '4px',
								marginBottom: '10px',
							}}
						/>
						<h4 style={{ margin: '0 0 6px 0' }}>{product.title}</h4>
						<p style={{ fontSize: '14px', color: '#444' }}>
							Артикул: {product.article}
						</p>
						<p style={{ fontWeight: 'bold', marginTop: '8px' }}>
							{product.price.toFixed(2)} ₽
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsPage;
