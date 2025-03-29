import React from "react";

import ProductCard from "~shared/components/productCard/productCard.component";
import { button, buttonContainer, productContainer } from "./productList.style";

export const ProductList = ({ products, loading, hasMore, setPage, category }) => {
  return (
    <>
      {loading && products.length === 0 && <p>Loading...</p>}
      <div className={productContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} category={category} />
        ))}
      </div>
      {hasMore && !loading && (
        <div className={buttonContainer}>
          <button className={button} onClick={() => setPage((prev) => prev + 1)}>
            See more
          </button>
        </div>
      )}
      {loading && <p>Loading more products...</p>}
    </>
  );
};

