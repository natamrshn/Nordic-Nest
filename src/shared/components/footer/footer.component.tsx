import * as React from 'react';
import { Link } from "react-router-dom";
import FacebookIcon from '../../../assets/facebook.png';
import InstagramIcon from '../../../assets/instagram.png';
import TwitterIcon from '../../../assets/twitter.png';

import { box, contact, container, description, icon, section, span, titel } from './footer.styles';

const Footer: React.FC = () => {
  return (
    <footer className={box}>
      <div className={titel}>NORDICNEST</div>
      <div className={container}>
        <div className={section}>
          <Link className={description} to="/">EXPLORE</Link>
          <Link className={description} to="/shop">Shop</Link>
          <Link className={description} to="/about">About Us</Link>
          <Link className={description} to="/login">Login</Link>
          <Link className={description} to="/card">Card</Link>
        </div>
        <div className={section}> 
          <Link className={description} to="https://www.google.com/maps/place/Passeig+de+Garcia+F%C3%A0ria,+81,+Sant+Mart%C3%AD,+08019+Barcelona">            
            <span>Passeig de Garcia Fària, 81, Sant Martí, 08019 Barcelona</span>
          </Link>
          <span>Customer Service: Closed. Opens at 9:00 AM ET. Weekly Hours</span>         
        </div>
        <div className={section}>
          <div className={contact}>Call us:<a href="tel:+34685090606">+34 685 09 06 06</a></div>
          <div className={contact}>Write us: <a href="mailto:nordic_nest@gmail.com">nordic_nest@gmail.com</a></div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <h3 className={description}>Follow us:</h3>
            <Link to="/facebook" aria-label="Facebook">
              <img className={icon} src={FacebookIcon} alt="facebook" />
            </Link>
            <Link to="/instagram" aria-label="Instagram">
              <img className={icon} src={InstagramIcon} alt="instagram" />
            </Link>
          
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link className={description} to="/feedback">Leave feedback  </Link>
            <Link to="/facebook" aria-label="Facebook">
              <img className={icon} src={FacebookIcon} alt="facebook" />
            </Link>
            <Link to="/instagram" aria-label="Instagram">
              <img className={icon} src={InstagramIcon} alt="instagram" />
            </Link>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
