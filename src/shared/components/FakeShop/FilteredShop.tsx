import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SidebarFilter from './SideBar';
import FilterButton from './FilteredShopComponents/FilterButton';
import ProductList from './FilteredShopComponents/ProductList';

interface Product {
	id: string;
	title: string;
	article: string;
	price: number;
	mainImage: string;
	category: string;
	isNew: boolean;
}

interface Category {
	id: number;
	title: string;
	type: string;
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
	const [availableAttributes, setAvailableAttributes] = useState<{
		[key: string]: string[];
	}>({});
	const [selectedAttributes, setSelectedAttributes] = useState<{
		[key: string]: string[];
	}>({});

	useEffect(() => {
		const categoryIds = searchParams.get('categoryIds');
		if (categoryIds) {
			const ids = categoryIds
				.split(',')
				.map((id) => parseInt(id, 10))
				.filter((n) => !isNaN(n));
			setSelectedIds(ids);
		} else {
			setSelectedIds([]);
		}
	}, [searchParams]);

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
				setAvailableAttributes(data.availableAttributes || {});
				const grouped: { [type: string]: Category[] } = {};
				data.content.forEach((cat: Category) => {
					if (!grouped[cat.type]) grouped[cat.type] = [];
					grouped[cat.type].push(cat);
				});
				setGroupedCategories(grouped);
			})
			.catch((err: Error) => console.error(err));
	}, []);

	const toggleAttributeValue = (attrName: string, value: string) => {
		setSelectedAttributes((prev) => {
			const prevValues = prev[attrName] || [];
			const isSelected = prevValues.includes(value);

			let newValues: string[];
			if (isSelected) {
				newValues = prevValues.filter((v) => v !== value);
			} else {
				newValues = [...prevValues, value];
			}

			const newSelected = { ...prev };
			if (newValues.length > 0) {
				newSelected[attrName] = newValues;
			} else {
				delete newSelected[attrName];
			}

			console.log('Updated selectedAttributes:', newSelected);
			return newSelected;
		});
	};

	useEffect(() => {
		setLoading(true);
		setError(null);

		const attributesParams = Object.entries(selectedAttributes)
			.map(([attrName, values]) =>
				values
					.map(
						(value) =>
							`${encodeURIComponent(attrName)}=${encodeURIComponent(value)}`,
					)
					.join('&'),
			)
			.join('&');

		let url =
			'http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/products/search';

		if (selectedIds.length > 0) {
			url += `?categoryIds=${selectedIds.join(',')}`;
			if (attributesParams) {
				url += `&${attributesParams}`;
			}
		} else {
			// Нет категорий — загружаем все товары (с учетом выбранных атрибутов)
			if (attributesParams) {
				url += `?${attributesParams}`;
			}
		}

		fetch(url)
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

				if (data.availableAttributes)
					setAvailableAttributes(data.availableAttributes);

				if (loadedProducts.length > 0) {
					const prices = loadedProducts.map((p) => p.price);
					setMinPriceLimit(Math.min(...prices));
					setMaxPriceLimit(Math.max(...prices));
					setPriceRange([Math.min(...prices), Math.max(...prices)]);
				} else {
					setMinPriceLimit(0);
					setMaxPriceLimit(1000);
					setPriceRange([0, 1000]);
				}

				setLoading(false);
			})
			.catch((err: Error) => {
				setError(err.message);
				setLoading(false);
			});
	}, [selectedIds, selectedAttributes]);

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
			{!isSidebarOpen && (
				<FilterButton onClick={() => setIsSidebarOpen(true)} />
			)}
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
				availableAttributes={availableAttributes}
				selectedAttributes={selectedAttributes}
				toggleAttributeValue={toggleAttributeValue}
			/>
			<ProductList
				loading={loading}
				error={error}
				products={visibleProducts}
			/>
		</div>
	);
};

export default FilteredProductsPage;
