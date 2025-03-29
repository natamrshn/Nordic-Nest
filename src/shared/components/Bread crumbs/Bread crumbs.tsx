import { Link } from 'react-router-dom';
import {container,  imageStyle, titleHome, titlelink,  } from './Bread crumbs.style';
import Arrow from '../../../assets/icon-arrow-right.svg?url';

type Props = {
  title: string;
};

export const BreadCrumbs: React.FC<Props> = ({ title }) => {
  return (
    <div className={container}>
      <Link className={titleHome} to="/" >
        Home 
        <img className={imageStyle} src={Arrow} alt="Arrow" />   
      </Link>
      <Link className={titlelink} to={`/${title.toLowerCase()}`}>
        {title}
      </Link>
    </div>
  );
};

export default BreadCrumbs;
