import React, { useEffect, useState } from "react";
import { container, description, link, linkContainer, productContainer, spaceItem, title } from './kitchen.content.style'; 
import { searchProducts } from "~shared/services/protucts.service";
import ProductCard from "~shared/components/productCard/productCard.component";
import { Link } from "react-router-dom";
import { SPACE_LINKS } from "~shared/constants/spaceLink";
import { titel } from "~shared/components/footer/footer.styles";

export const KitchenContent: React.FC = () => {
	const [products, setProducts] = useState<ProductCardProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
    setIsLoading(true);
    searchProducts('')
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setIsError(true);
        setProducts([]);
      })
   
      setIsLoading(false);
      
  }, []);
  

  return (
    <section className={container}>
      <h1 className={title}>KITCHEN ACCESORIES</h1> 
      <div className={linkContainer}>
        <div className={description}>
          <p>
            A thoughtfully designed and curated selection of modern and timeless 
            kitchen essentials, blending functionality with elegance. Each item is crafted to elevate 
            your culinary experience, bringing together heritage craftsmanship 
            and contemporary aesthetics.
          </p>
        </div>
        <ul className={linkContainer} >
          {SPACE_LINKS.map(({ path, label }) => (
            <li className={link} key={path} >                  
              <Link className={spaceItem} to={path}>{label}</Link>               
            </li>
          ))}
        </ul>
      </div>
   
      <div className={productContainer}>
        {products.map(product => 
          <ProductCard {...product}/>
        )}
      </div>
    </section>
  );
};

export default KitchenContent;
