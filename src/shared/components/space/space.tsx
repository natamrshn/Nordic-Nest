import * as React from 'react';
import { Link } from "react-router-dom";
import { spaceItem, title } from './space.styles';
import { SPACE_LINKS } from '~shared/constants/spaceLink';


const Space: React.FC = () => {
  return (
    <div>
      <h5 className={title}>SPACE</h5>
      <ul >
        {SPACE_LINKS.map(({ path, label }) => (
            <li  key={path} >                  
              <Link  className={spaceItem} to={path}>{label}</Link>               
            </li>
        ))}
      </ul>

    </div>
       
    );

};

export default Space;