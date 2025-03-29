import React, { useEffect, useState } from "react";
import { container, description, productContainer,  title, linkContainer } from './bedRoom.content.style'; 
import { NavLinkComponent } from "~shared/components/navLink/navLinkComponent";
import { useProducts } from "~shared/hooks/usePoducts";
import { ProductList } from "~shared/components/productList/productlist";


export const BedRoomContent: React.FC = () => {
  const { products, loading, hasMore, setPage } = useProducts('3');

  return (
    <section className={container}>
      <h1 className={title}>BED ROOM</h1> 
      <div className={linkContainer}>
        <div className={description}>
          <p>
            
          </p>
        </div>
        <NavLinkComponent />
      </div>

      <ProductList 
        products={products} 
        loading={loading} 
        hasMore={hasMore} 
        setPage={setPage} 
        category="Bed Room" 
      />

    </section>
  );
};

export default BedRoomContent;
