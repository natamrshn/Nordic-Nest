import * as React from 'react';
import { Link } from "react-router-dom";
import { spaceItem, title } from './space.styles';

const SPACE_LINKS = [
    { path: '/kitchen', label: 'Kitchen' }, 
    { path: '/living room', label: 'Living Room' },
    { path: '/bedroom', label: 'Bedroom' },
    { path: '/childrens room', label: 'Childrens`room' },
    { path: '/office', label: 'Office' },
    { path: '/outdoor', label: 'Outdoor' },
];



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