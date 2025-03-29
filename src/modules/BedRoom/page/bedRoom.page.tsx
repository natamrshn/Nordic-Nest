import React from "react";
import { useNavigate } from "react-router-dom";
import { boxs } from "./bedRoom.style";
import { BedRoomContent } from '../components/bedRoomContent/bedRoom.content';
import  BreadCrumbs from "~shared/components/Bread crumbs/Bread crumbs";

const BedRoomPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={boxs}>
      <BreadCrumbs title={'Bed room'} />
      <BedRoomContent /> 
    </div>
  );
};

export default BedRoomPage;
