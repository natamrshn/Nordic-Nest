import { useEffect, useState } from "react";
import { searchProducts } from "~shared/services/protucts.service";

const ITEMS_PER_PAGE = 8;

export const useProducts = (categoryIds: string) => {
  const [products, setProducts] = useState([]); 
  const [page, setPage] = useState(0); 
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await searchProducts(`categoryIds=${categoryIds}`, page, ITEMS_PER_PAGE);
  
      setProducts((prev) => [...prev, ...response]);
      setHasMore(response.length === ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return { products, loading, hasMore, setPage };
};
