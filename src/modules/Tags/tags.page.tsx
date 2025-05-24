import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { boxs } from '~modules/card/cartPage.style';

import BreadCrumbs from '~shared/components/Bread crumbs/Bread crumbs';
import RoomContent from '~shared/components/roomContent/roomContent';
import { getAllCategories } from '~shared/services/categorios.service';

interface Category {
	id: number;
	title: string;
	type: string;
	imageUrl: string;
  description: string;
}


export const Tags = () => {
  const { categoryName } = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
    
	useEffect(() => {
    setIsLoading(true);
    getAllCategories()
      .then(data => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setCategories([]);
        setIsLoading(false);
      });
  }, [categoryName]);
  

  const category = categories.find(item =>
    item.title.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className={boxs}>
    {category && (
      <>
        <BreadCrumbs title={category.title} />
        <RoomContent categories={categories}  categoryId={category.id.toString()} categoryTitle={category.title} categoryDescription={category.description} />
      </>
    )}
  </div>
  );
};
