import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 8;

interface UseProductsParams {
  categoryIds: string;
  sortOrder?: string;
  maxPrice?: number;
}

export const useProducts = ({ categoryIds, sortOrder, maxPrice }: UseProductsParams) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setProducts([]);
    setPage(0);
    setHasMore(true);
  }, [categoryIds, sortOrder, maxPrice]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (loading || !hasMore) return;

      setLoading(true);
      try {
        const params = new URLSearchParams();

              
       
        params.append("categoryIds", categoryIds);       
        
        
        params.append("minPrice", "0");
        params.append("maxPrice", (maxPrice ?? 200000).toString());
        params.append("page_number", page.toString());
        params.append("page_size", ITEMS_PER_PAGE.toString());
        if (sortOrder) {
          params.append("sort", sortOrder);
        }
        

        const response = await fetch(`http://ec2-16-16-187-41.eu-north-1.compute.amazonaws.com/products/search?${params.toString()}`);
        const data = await response.json();

        const newProducts = data.products?.content ?? [];

        setProducts((prev) => (page === 0 ? newProducts : [...prev, ...newProducts]));
        setHasMore(newProducts.length === ITEMS_PER_PAGE);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, categoryIds, sortOrder, maxPrice]);

  return { products, loading, hasMore, setPage };
};
