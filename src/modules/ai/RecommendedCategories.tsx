// src/pages/RecommendedCategories.tsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

type CategoryType = {
	id: number;
	title: string;
	imageUrl?: string; // предполагаемое поле с фото
};

const RecommendedCategories = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const categoryIdsStr = searchParams.get('categoryIds');
	const [categories, setCategories] = useState<CategoryType[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchCategories = async () => {
			if (!categoryIdsStr) return;

			const ids = categoryIdsStr.split(',').map((id) => parseInt(id, 10));
			setLoading(true);
			const fetchedCategories = await Promise.all(
				ids.map(async (id) => {
					try {
						const res = await fetch(
							`http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/categories/${id}`,
						);
						if (!res.ok) return null;
						return await res.json();
					} catch {
						return null;
					}
				}),
			);
			setCategories(fetchedCategories.filter(Boolean) as CategoryType[]);
			setLoading(false);
		};

		fetchCategories();
	}, [categoryIdsStr]);

	if (loading) return <p>Загружаем категории...</p>;

	return (
		<div style={{ padding: '20px', marginTop: '100px' }}>
			<h2>Рекомендованные категории</h2>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '40px',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{categories.map((cat) => (
					<div
						key={cat.id}
						style={{
							width: '300px',
							border: '1px solid #ccc',
							padding: '10px',
							borderRadius: '8px',
							textAlign: 'center',
						}}
					>
						<img
							src={cat.imageUrl || '/placeholder.jpg'}
							alt={cat.title}
							style={{
								width: '100%',
								height: '300px',
								objectFit: 'cover',
							}}
						/>
						<h3>{cat.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecommendedCategories;
