import React, { useEffect, useState } from "react";
import { container, description, productContainer,  title, linkContainer } from './livingRoom.content.style'; 
import { NavLinkComponent } from "~shared/components/navLink/navLinkComponent";
import { useProducts } from "~shared/hooks/usePoducts";
import { ProductList } from "~shared/components/productList/productlist";


export const LivingRoomContent: React.FC = () => {
  const { products, loading, hasMore, setPage } = useProducts('2');

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

      <ProductList 
        products={products} 
        loading={loading} 
        hasMore={hasMore} 
        setPage={setPage} 
        category="Living Room" 
      />

    </section>
  );
};

export default LivingRoomContent;
