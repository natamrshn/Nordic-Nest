import React from "react";
import { useNavigate } from "react-router-dom";
import { boxs } from "./livingRoom.style";
import { LivingRoomContent } from '../components/livingRoomContent/livingRoom.content';
import  BreadCrumbs from "~shared/components/Bread crumbs/Bread crumbs";

const LivingRoomPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={boxs}>
      <BreadCrumbs title={'Living room'} />
      <LivingRoomContent />      

    </div>
  );
};

export default LivingRoomPage;
