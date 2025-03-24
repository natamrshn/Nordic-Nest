import React from "react";
import { useNavigate } from "react-router-dom";
import { boxs } from "./kitchen.style";
import KitchenContent from '../components/kitchenContent/kitchen.content';
import  BreadCrumbs from "../../../shared/components/Bread crumbs/Bread crumbs";

const KitchenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={boxs}>
      <BreadCrumbs title={'Kitchen Accesories'} />
      <KitchenContent />      

    </div>
  );
};

export default KitchenPage;
