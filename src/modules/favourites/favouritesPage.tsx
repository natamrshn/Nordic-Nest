import React from 'react'
import useStore from '../../shared/stores/card.store'
import BreadCrumbs from '~shared/components/Bread crumbs/Bread crumbs'
import {
	boxs,
	productCard,
	productImage,
	quantityControls,
	qtyButton,
	qtyDisplay,
	removeButton,
	product,
  quantityContainer,
  title,
  productName,
  productCategory,
  addToCarts,
  productMain,
} from './favouritesPage.style'
import { addToCartButton, overlay } from '~shared/components/productCard/productCard.styles'

const FavouritesPage: React.FC = () => {
	const favourites = useStore((state) => state.favourites)
	const toggleFavorite = useStore((state) => state.toggleFavorite)
	const addToCart = useStore((state) => state.addToCart)
	const removeFromCart = useStore((state) => state.removeFromCart)
	const cart = useStore((state) => state.cart)

  const handleAddToCart = (item) => {
		addToCart(item);
		console.log('Cart:', useStore.getState().cart);
	};

	if (favourites.length === 0) {
		return (
			<div className={boxs}>
				<p>У вас поки немає обраних товарів ❤️</p>
			</div>
		)
	}

	const getQuantity = (id: string) => {
		const item = cart.find((item) => item.id === id)
		return item?.quantity || 1
	}

	return (
		<div className={boxs}>
			<BreadCrumbs title="My Favourites" />
			<h1 className={title}>MY FAVOURITES</h1>
			<div className={product}>
				{favourites.map((item) => (
					<div key={item.id} className={productCard}>
			      <div className={productMain}>
              <img src={item.mainImage} alt={item.title} className={productImage} />
              <div>
                <h3 className={productName}>{item.title}</h3>
                <p className={productCategory}> For {item.category}</p>

                <div className={quantityControls}>
                  <div className={quantityContainer}>
                    <button className={qtyButton} onClick={() => removeFromCart(item.id)}>
                      −
                    </button>
                    <span className={qtyDisplay}>{getQuantity(item.id)}</span>
                    <button className={qtyButton} onClick={() => addToCart(item)}>
                      +
                    </button>
                  </div>
                

                
              </div>
                <p className="">${item.price}</p>
              </div>				

              
              <button className={removeButton} onClick={() => toggleFavorite(item)}>
                x
              </button>
            </div>

            <div className={addToCarts}>
              <div className={addToCartButton} onClick={()=>handleAddToCart(item)}>
                ADD TO CART
              </div>
            </div>
			    </div>
			  ))}
			</div>
      
		</div>
	)
}

export default FavouritesPage
