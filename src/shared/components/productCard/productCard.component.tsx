import heartIcon from '~assets/icon-heart-dark.svg?url';
import {
	addToCartButton,
	cardStyle,
	categoryStyle,
	favoriteButton,
	headerStyle,
	imageContainer,
	imageStyle,
	infoStyle,
	newLabel,
	overlay,
	priceStyle,
	titleStyle,
} from './productCard.styles';
import useStore from '../../stores/card.store';

interface ProductCardProps {
	id: string;
	mainImage: string;
	title: string;
	price: number;
	category: string;
	isNew: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	mainImage,
	title,
	price,
	category,
	isNew,
}) => {
	const { addToCart, toggleFavorite, favourites } = useStore();

	const isFavoriteNow = favourites.some((item) => item.id === id);

	const handleToggleFavorite = () => {
		toggleFavorite({ id, mainImage, title, price, category, isNew });
		console.log('Favorites:', useStore.getState().favourites);
		
	};

	const handleAddToCart = () => {
		addToCart({ id, mainImage, title, price, category, isNew });
		console.log('Cart:', useStore.getState().cart);
	};

	return (
		<div className={cardStyle}>
			<div className={imageContainer}>
				{isNew && <span className={newLabel}>New</span>}
				<img src={mainImage} alt={title} className={imageStyle} />
				<button className={favoriteButton} onClick={handleToggleFavorite}>
					<img
						src={heartIcon}
						alt="Favorite"
						style={{ opacity: isFavoriteNow ? 1 : 0.3 }}
					/>
				</button>
				<div className={overlay}>
					<div className={addToCartButton} onClick={handleAddToCart}>
						ADD TO CART
					</div>
				</div>
			</div>
			<div className={infoStyle}>
				<div className={headerStyle}>
					<h3 className={titleStyle}>{title}</h3>
					<span className={priceStyle}>${price}</span>
				</div>
				<p className={categoryStyle}>For {category}</p>
			</div>
		</div>
	);
};

export default ProductCard;
