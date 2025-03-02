import * as React from "react";
import { Link } from "react-router-dom";

import Exclusive from '../../../../assets/exclusive.png'
import ArrowRight from '../../../../assets/arrow to the right.png'

import {
  container,
  box,
  icon,
  imageStyle,
  titel,
  description,
  field,
  form,
  container_field,
  button
} from "./exclusiveCircle.styles";

const ExclusiveCircle: React.FC = () => {
  return (
    <section className={container}>
      <div className={box}>  
        <img className={imageStyle} src={Exclusive} alt="exlusive circle" />    
      </div>
      <div className={box}>
          <h2 className={titel}>JOIN OUR EXCLUSIVE <br></br> CIRCLE</h2>
          <p className={description}>
            Sign up now and enjoy 10% off your first order! Be the first to
            discover our new collections, limited-edition antiques, and
            exclusive offers—before anyone else!
          </p>
          <form className={form} action="#" method="get">
            <div className={container_field}>
              <input
                name="email"
                placeholder="Enter your email below to unlock your discount"
                type="email"
                className={field}
                required
              />
              <button type="submit" className={button}>
                <img className={icon} src={ArrowRight} alt="arrow icon" />
              </button>
            </div>
          </form>
        </div>
    </section>
  );
};

export default ExclusiveCircle;
