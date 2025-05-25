import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Category {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	type: string;
	key: string;
}

const CategoryList = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedIds, setSelectedIds] = useState<number[]>([]); // храним выбранные id
	const navigate = useNavigate();

	useEffect(() => {
		fetch(
			'http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/categories?page_size=20',
		)
			.then((res) => {
				if (!res.ok) throw new Error('Ошибка сети');
				return res.json();
			})
			.then((data) => {
				const items = data.content.map((item: Category) => ({
					...item,
					key: String(item.id),
				}));
				setCategories(items);
				setLoading(false);
			})
			.catch((err: Error) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	// Группируем категории по type
	const groupedByType: { [type: string]: Category[] } = {};
	categories.forEach((cat) => {
		if (!groupedByType[cat.type]) groupedByType[cat.type] = [];
		groupedByType[cat.type].push(cat);
	});

	const toggleSelectedId = (id: number) => {
		setSelectedIds((prev) =>
			prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
		);
	};

	const handleShowProducts = () => {
		if (selectedIds.length === 0) {
			alert('Выберите хотя бы одну категорию');
			return;
		}
		const categoryIdsString = selectedIds.join(',');
		navigate(`/products?categoryIds=${categoryIdsString}`);
	};

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка: {error}</div>;

	return (
		<div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
			<h2>Фильтр по комнатам и элементам</h2>

			{/* ФИЛЬТР */}
			<div style={{ marginTop: '40px' }}>
				{Object.entries(groupedByType).map(([room, items]) => (
					<div key={room} style={{ marginBottom: '16px' }}>
						<h3>{room}</h3>
						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: '10px',
							}}
						>
							{items.map((cat) => (
								<label
									key={cat.id}
									style={{ cursor: 'pointer' }}
								>
									<input
										type="checkbox"
										checked={selectedIds.includes(cat.id)}
										onChange={() =>
											toggleSelectedId(cat.id)
										}
										style={{ marginRight: '6px' }}
									/>
									{cat.title}
								</label>
							))}
						</div>
					</div>
				))}
			</div>

			{/* Кнопка перейти к товарам */}
			<button
				onClick={handleShowProducts}
				style={{
					marginTop: '20px',
					padding: '10px 20px',
					fontSize: '16px',
					cursor: 'pointer',
					borderRadius: '6px',
					border: 'none',
					backgroundColor: '#007bff',
					color: '#fff',
				}}
			>
				Показать товары
			</button>

			{/* Можно дополнительно показать выбранные категории */}
			{selectedIds.length > 0 && (
				<div style={{ marginTop: '20px' }}>
					Выбраны категории:{' '}
					{categories
						.filter((cat) => selectedIds.includes(cat.id))
						.map((cat) => cat.title)
						.join(', ')}
				</div>
			)}
		</div>
	);
};

export default CategoryList;
