import { useState } from 'react';
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


const ProductCard: React.FC<ProductCardProps> = ({
	mainImage,
	title,
	price,
	category,
	isNew,
}) => {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<div className={cardStyle}>
			<div className={imageContainer}>
				{isNew && <span className={newLabel}>New</span>}
				<img src={mainImage} alt={title} className={imageStyle} />
				<button
					className={favoriteButton}
					onClick={() => setIsFavorite(!isFavorite)}
				>
					<img src={heartIcon} alt="Favorite" />
				</button>
				<div className={overlay}>
					<div className={addToCartButton}>ADD TO CART</div>
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
