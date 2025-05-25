import ProductCard from "~shared/components/productCard/productCard.component";

interface Product {
	id: string;
	title: string;
	article: string;
	price: number;
	mainImage: string;
	category: string;
	isNew: boolean;
}

const ProductList = ({
	loading,
	error,
	products,
}: {
	loading: boolean;
	error: string | null;
	products: Product[];
}) => (
	<div style={{ padding: '20px', marginTop: '140px' }}>
		<h2 style={{marginTop: '20px', marginBottom:'20px'}}>Results</h2>
		{loading && <div>loading</div>}
		{error && <div style={{ color: 'red' }}>Error {error}</div>}
		{!loading && products.length === 0 && (
			<p>No available products</p>
		)}
		<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					id={product.id}
					mainImage={
						product.mainImage || 'https://via.placeholder.com/250'
					}
					title={product.title}
					price={product.price}
					category={product.category || 'Uncategorized'}
					isNew={product.isNew || false}
				/>
			))}
		</div>
	</div>
);

export default ProductList;
