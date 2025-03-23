import React from "react";
import { useNavigate } from "react-router-dom";
import { boxs } from "./kitchen.style";
import KitchenContent from '../components/aboutContent/kitchen.content';
import  BreadCrumbs from "../../../shared/components/Bread crumbs/Bread crumbs";

const KitchenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={boxs}>
      <BreadCrumbs title={'Shop'} />
      <KitchenContent />      

    </div>
  );
};

export default KitchenPage;
