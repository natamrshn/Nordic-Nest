import React from "react";
import { useNavigate } from "react-router-dom";
import { boxs } from "./find-us.style";
import AboutContent from '../components/findContent/find.content';
import  BreadCrumbs from "../../../shared/components/Bread crumbs/Bread crumbs";

const FindUsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={boxs}>
      <BreadCrumbs title={'Find Us'} />
      <AboutContent />      
    </div>
  );
};

export default FindUsPage;
