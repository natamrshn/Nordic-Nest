import React from "react";
import { useNavigate } from "react-router-dom";
import { boxs } from "./kitchen.style";
import KitchenContent from '../components/kitchenContent/kitchen.content';
import  BreadCrumbs from "../../../shared/components/Bread crumbs/Bread crumbs";
import RoomContent from "~shared/components/roomContent/roomContent";

const KitchenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={boxs}>
      <BreadCrumbs title={'Kitchen Accesories'} />
      <RoomContent  categoryId="1" categoryTitle="KITCHEN ACCESSORIES"/>     
    </div>
  );
};

export default KitchenPage;
