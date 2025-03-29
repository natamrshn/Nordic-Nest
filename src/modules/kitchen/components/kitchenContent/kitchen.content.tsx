import { NavLinkComponent } from "~shared/components/navLink/navLinkComponent";
import { ProductList } from "~shared/components/productList/productlist";
import { useProducts } from "~shared/hooks/usePoducts";
import { container, description, linkContainer, title } from "./kitchen.content.style";

export const KitchenContent: React.FC = () => {
  const { products, loading, hasMore, setPage } = useProducts('1');

  return (
    <section className={container}>
      <h1 className={title}>KITCHEN ACCESSORIES</h1> 
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
        category="Kitchen Room" 
      />
    </section>
  );
};

export default KitchenContent;
