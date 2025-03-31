import { useState, useEffect } from "react";
import { searchProducts } from "~shared/services/protucts.service";


export const useProducts = (query: string) => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    searchProducts(query)
      .then((data) => {
        setProducts(data);
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
        setProducts([]);
      })
  
        setIsLoading(false);
    
  }, [query]);

  return { products, isLoading, isError };
};
