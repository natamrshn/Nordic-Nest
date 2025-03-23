import React, { useEffect, useState } from "react";
import { container, description, link, linkContainer, productContainer, spaceItem, title } from './livingRoom.content.style'; 
import { searchProducts } from "~shared/services/protucts.service";
import ProductCard from "~shared/components/productCard/productCard.component";
import { Link } from "react-router-dom";
import { SPACE_LINKS } from "~shared/constants/spaceLink";


export const LivingRoomContent: React.FC = () => {
	const [products, setProducts] = useState<ProductCardProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
    setIsLoading(true);
    searchProducts('categoryIds=10')
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
      <h1 className={title}>LIVING ROOM</h1> 
      <div className={linkContainer}>
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

export default LivingRoomContent;
