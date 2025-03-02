import * as React from 'react';
import { Link } from "react-router-dom";
import { icon} from './modalImg.styles';
import Bestsellers from '../../../assets/bestsellers.png'
import NewIn from '../../../assets/new in.png';




const ModalImg: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>   
      <img className={icon} src={Bestsellers} alt="bestsellers" /> 
      <img className={icon} src={NewIn} alt="New in" />  
    </div>       
  );

};

export default ModalImg;