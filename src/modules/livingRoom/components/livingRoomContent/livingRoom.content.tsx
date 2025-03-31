import React, { useEffect, useState } from "react";
import { container, description, productContainer,  title, linkContainer } from './livingRoom.content.style'; 
import { searchProducts } from "~shared/services/protucts.service";
import ProductCard from "~shared/components/productCard/productCard.component";
import { NavLinkComponent } from "~shared/components/navLink/navLinkComponent";
import { useProducts } from "~shared/hooks/usePoducts";
import { button, buttonContainer } from "~modules/kitchen/components/kitchenContent/kitchen.content.style";


export const LivingRoomContent: React.FC = () => {
	const { products, isLoading, isError } = useProducts('categoryIds=10');
  const [visibleProducts, setVisibleProducts] = useState(8);

  return (
    <section className={container}>
      <h1 className={title}>LIVING ROOM</h1> 
      <div className={linkContainer}>
        <div className={description}>
          <p>
            A thoughtfully designed and curated selection of modern and timeless 
            kitchen essentials, blending functionality with elegance. Each item is crafted to elevate 
            your culinary experience, bringing together heritage craftsmanship 
            and contemporary aesthetics.
          </p>
        </div>

        <NavLinkComponent />
        
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading products.</p>}
   
      <div className={productContainer}>
        
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard {...product}/>
        ))}
               
      </div>
      {visibleProducts < products.length && (
        <div className={buttonContainer}>
          <button className={button} onClick={() => setVisibleProducts(visibleProducts + 8)}>
            See more
          </button>
        </div>
      )}
    </section>
  );
};

export default LivingRoomContent;
