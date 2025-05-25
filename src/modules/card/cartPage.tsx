import React from 'react'
import useStore from '../../shared/stores/card.store'
import BreadCrumbs from '~shared/components/Bread crumbs/Bread crumbs'
import {
	boxs,
	productCard,
	productImage,

	qtyButton,
	qtyDisplay,
	removeButton,
	product,
  quantityContainer,
  title,
  productName,
  productCategory,


  container,
  order,
  orderTitle,
  text,
  text1,
  text2,
  textBottom,
  orderCarts,
} from './cartPage.style'

import { Link } from 'react-router-dom'
import { addToCarts } from '~modules/favourites/favouritesPage.style'
import { addToCartButton } from '~shared/components/productCard/productCard.styles'

const CartPage: React.FC = () => {
	const cart = useStore((state) => state.cart)
	const toggleFavorite = useStore((state) => state.toggleFavorite)
	const addToCart = useStore((state) => state.addToCart)
	const removeFromCart = useStore((state) => state.removeFromCart)

	const totalPrice = cart.reduce((accumulator, currentProduct) => {
		if (currentProduct.amount !== undefined) {
		  return accumulator + (currentProduct.amount * currentProduct.price);
		}
	
		return 0;
	  }, 0);
	  const totalCount = cart.reduce((count, currentProduct) => {
		if (currentProduct.amount !== undefined) {
		  return (count + currentProduct.amount);
		}
	
		return 0;
	  }, 0);
	
  const handleAddToCart = (item) => {
		addToCart(item);
		console.log('Cart:', useStore.getState().cart);
	};

	if (cart.length === 0) {
		return (
			<div className={boxs}>
				<p>У вас поки немає обраних товарів ❤️</p>
			</div>
		)
	}

	const getQuantity = (id: string) => {
		const item = cart.find((item) => item.id === id)
		return item?.amount || 1
	}

	return (
		<div className={boxs}>
			<BreadCrumbs title="Cart" />
			<h1 className={title}>CART</h1>
		  <div className={container}>
        <div className={product}>
          {cart.map((item) => (
            <div key={item.id} className={productCard}>
              <img src={item.mainImage} alt={item.title} className={productImage} />
              <div>
                <h3 className={productName}>{item.title}</h3>
                <p className={productCategory}> For {item.category}</p>           
                <div className={quantityContainer}>
                  <button className={qtyButton} onClick={() => removeFromCart(item.id)}>
                    −
                  </button>
                  <span className={qtyDisplay}>{getQuantity(item.id)}</span>
                  <button className={qtyButton} onClick={() => addToCart(item)}>
                    +
                  </button>
                </div>
                <p className="">${item.price}</p>
              </div>				
              <button className={removeButton} onClick={() => removeFromCart(item.id)}>
                x
              </button>
            </div>
          ))}
        </div>

        <div className={order}>    
          <div className={orderTitle}>Order summary</div>
          <div className={`${container } ${text1}`}>
            <div>
              Subtotal
            </div>
            <div>
              {`$${totalPrice.toFixed(2)}`}
            </div>
          </div>
          <div className={textBottom}>
            <div className={`${container } ${text}`}>
              <div>
                Prorated adjustment
              </div>
              <div>
                {`$${totalPrice.toFixed(2)}`}
              </div>
            </div>
            <div className={`${container } ${text}`}>
              <div>
                VAT (21.0%)
              </div>
              <div>
                {`$${(totalPrice * 0.21).toFixed(2)}`}
              </div>
            </div>
          </div>
          
          <div className={`${container } ${text2}`}>
            <div>
              Total:
            </div>
            <div>
              {`$${totalPrice.toFixed(2)}`}
            </div>
          </div>
    
          <div className={orderCarts}>
            <div className={addToCartButton}>
              Proceed to Checkout
            </div>
          </div>

        </div>      
			</div>
		</div>
	)
}

export default CartPage
