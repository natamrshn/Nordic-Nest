import React, { useRef, useState } from 'react';
import { box, button, text } from './ai.styles';
import { h2 } from '~shared/styles';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedProgressList from './AnimatedProgressList';

type ResultType = {
	searchUrl: string;
	designParameters: Record<string, number>;
};

type CategoryType = {
	id: number;
	title: string;
	imageUrl: string; // добавил imageUrl, чтобы показать картинку
	// другие поля категории можно добавить по необходимости
};

const AI = () => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [result, setResult] = useState<ResultType | null>(null);
	const [categories, setCategories] = useState<CategoryType[]>([]);
	const [loadingCategories, setLoadingCategories] = useState(false);
	const [showCategories, setShowCategories] = useState(false);

	const handleButtonClick = () => {
		fileInputRef.current?.click();
	};

	const fetchCategory = async (id: number): Promise<CategoryType | null> => {
		try {
			const response = await fetch(
				`http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/categories/${id}`,
			);
			if (!response.ok) {
				console.warn(
					`Не удалось загрузить категорию ${id}: ${response.status}`,
				);
				return null;
			}
			return await response.json();
		} catch (error) {
			console.error('Ошибка загрузки категории:', error);
			return null;
		}
	};

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = event.target.files?.[0];
		if (!file) return;

		const formData = new FormData();
		formData.append('image', file);

		try {
			const response = await fetch(
				'http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/ai-design/base-recommendation',
				{
					method: 'POST',
					body: formData,
				},
			);

			if (!response.ok) {
				const text = await response.text();
				throw new Error(`Ошибка: ${response.status} — ${text}`);
			}

			const data: ResultType = await response.json();
			setResult(data);

			// Сброс категорий, пока не показаны
			setCategories([]);
			setShowCategories(false);
		} catch (error) {
			console.error('Ошибка при отправке файла:', error);
			alert('Ошибка при отправке файла: ' + error);
		}
	};
	const navigate = useNavigate();
	// По клику загружаем категории и показываем их карточками
	const handleCategoryClick = () => {
		if (!result) return;

		const urlParams = new URLSearchParams(result.searchUrl.split('?')[1]);
		const categoryIdsStr = urlParams.get('categoryIds');
		if (!categoryIdsStr) return;

		navigate(`/recommended-categories?categoryIds=${categoryIdsStr}`);
;
	};

	return (
		<div className={box}>
			<h2 style={h2}>Let AI Help You Choose</h2>
			<p className={text}>
				Upload a photo to let our AI analyze your style and suggest the
				perfect match. Get <br /> personalized recommendations
				instantly!
			</p>
			<input
				type="file"
				ref={fileInputRef}
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>
			<button onClick={handleButtonClick} className={button}>
				Select file
			</button>

			{result && (
				<div style={{ marginTop: '20px' }}>
					<h3>Design Preferences:</h3>
					<AnimatedProgressList
						designParameters={result.designParameters}
					/>

					<button
						onClick={handleCategoryClick}
						style={{
							cursor: 'pointer',
							color: 'blue',
							background: 'none',
							border: 'none',
							padding: 0,
							textDecoration: 'underline',
						}}
					>
						Show Recommended Categories
					</button>
				</div>
			)}
		</div>
	);
};

export default AI;
