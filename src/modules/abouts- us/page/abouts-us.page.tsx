import React from "react";
import { useNavigate } from "react-router-dom";
import { boxs } from "./abouts-us.style";
import AboutContent from '../components/aboutContent/about.content';
import  BreadCrumbs from "../components/Bread crumbs/Bread crumbs";

const AboutUsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={boxs}>
      <BreadCrumbs title={'About Us'} />
      <AboutContent />      
      {/* <button onClick={() => navigate("/")}>Go Home</button> */}
    </div>
  );
};

export default AboutUsPage;
