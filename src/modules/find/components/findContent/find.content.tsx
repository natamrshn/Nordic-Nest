import React from "react";
import { container, box, imageStyle, title, description, text, infoBlock, contactContainer, icon, link, imageArrow, block, footerText } from './find.content.style'; // виправлено 'titel' на 'title'
import Pexels from '../../../../assets/pexels-pixabay.png';
import IconPhone from '../../../../assets/iconTelephon.svg?url';
import IconEmail from '../../../../assets/iconEmail.svg?url';
import IconLocation from '../../../../assets/iconLocation.svg?url';
import { a } from "~shared/components/footer/footer.styles";
import { Link } from "react-router-dom";
import MyMap from "../maps/maps.component";
import Arrow from '../../../../assets/icon-arrow-right.svg?url';


export const AboutContent: React.FC = () => {
  return (
    <section className={container}>    
      <div className={box}>
        <h2 className={title}>FIND US</h2>
    
      <div className={contactContainer}>
      <div className={block}>
        <div className={infoBlock}>
          <img className={icon} src={IconLocation} alt="IconLocation" />
          <p className={text}> Location: 
            <Link className={link} to="https://www.google.com/maps/place/Passeig+de+Garcia+F%C3%A0ria,+81,+Sant+Mart%C3%AD,+08019+Barcelona">            
              Passeig de Garcia Fària, 81, Sant Martí, 08019 Barcelona
            </Link>
          </p>
        </div>
        <div 
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link className={link} to="https://www.google.com/maps/place/Passeig+de+Garcia+F%C3%A0ria,+81,+Sant+Mart%C3%AD,+08019+Barcelona">            
            Open Google Maps
             
          </Link>
          <img className={imageArrow} src={Arrow} alt="Arrow" />  
        </div>
        
      </div>
 
        <MyMap />
     
      <div className={infoBlock}>
        <img className={icon} src={IconPhone} alt="IconPhone" />
        <p className={text}>Contact Us:<a className={link}  href="tel:+34685090606">+34 685 09 06 06</a></p>
      </div>
      <div className={infoBlock}>
        <img className={icon} src={IconEmail} alt="IconEmail" />
        <p className={text}>Email: <a className={link} href="mailto:nordic_nest@gmail.com">nordic_nest@gmail.com</a></p>
      </div>
      <p className={footerText}>
        Let us help you create a home that is truly one of a kind.
      </p>
    </div>

       
      </div>
 
    </section>
  );
};

export default AboutContent;
