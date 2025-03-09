import React from "react";
import { container, box, imageStyle, title, description, text, infoBlock, contactContainer, icon, link } from './about.content.style'; // виправлено 'titel' на 'title'
import Pexels from '../../../../assets/pexels-pixabay.png';
import IconPhone from '../../../../assets/iconTelephon.svg?url';
import IconEmail from '../../../../assets/iconEmail.svg?url';
import IconLocation from '../../../../assets/iconLocation.svg?url';
import { a } from "~shared/components/footer/footer.styles";
import { Link } from "react-router-dom";


export const AboutContent: React.FC = () => {
  return (
    <section className={container}>    
      <div className={box}>
        <h2 className={title}>ABOUT US</h2>
        <p className={description}>
          Welcome to NordicNest, where craftsmanship meets elegance. We specialize 
          in high-end, exclusive furniture designed to transform your living spaces into timeless works of art.
        </p>
        <p className={description}>
          Every piece in our collection is meticulously crafted using premium materials and expert techniques, ensuring exceptional quality, durability, and beauty. Whether you're seeking luxurious sofas, handcrafted dining tables, or 
          bespoke interior solutions, we offer one-of-a-kind designs that reflect sophistication and individuality.
        </p>
        <p className={description}>
          At NordicNest, we believe that furniture is more than just functional—it’s an expression of style and personality. That’s why 
          we collaborate with renowned designers and skilled artisans to create furniture that is as unique as you are
        </p>
        <p className={description}>
          Explore our showroom or browse our online 
          catalog to discover exclusive collections tailored for those who appreciate refined aesthetics and superior craftsmanship.
        </p>
      <div className={contactContainer}>
      <div className={infoBlock}>
        <img className={icon} src={IconLocation} alt="IconLocation" />
        <p className={text}> Location: <Link className={link} to="https://www.google.com/maps/place/Passeig+de+Garcia+F%C3%A0ria,+81,+Sant+Mart%C3%AD,+08019+Barcelona">            
            Passeig de Garcia Fària, 81, Sant Martí, 08019 Barcelona
          </Link></p>
      </div>
      <div className={infoBlock}>
        <img className={icon} src={IconPhone} alt="IconPhone" />
        <p className={text}>Contact Us:<a className={link}  href="tel:+34685090606">+34 685 09 06 06</a></p>
      </div>
      <div className={infoBlock}>
        <img className={icon} src={IconEmail} alt="IconEmail" />
        <p className={text}>Email: <a className={link} href="mailto:nordic_nest@gmail.com">nordic_nest@gmail.com</a></p>
      </div>
      <p className={text}>
        Let us help you create a home that is truly one of a kind.
      </p>
    </div>

       
      </div>
      <div className={box}>  
        <img className={imageStyle} src={Pexels} alt="Pexels" />    
      </div>
    </section>
  );
};

export default AboutContent;
