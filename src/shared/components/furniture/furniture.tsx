import * as React from 'react';
import { Link } from "react-router-dom";
import { spaceItem, title } from './furniture.styles';

const FURNITURE_LINKS = [
  { path: '/lighting', label: 'Lighting' },
  { path: '/sofas', label: 'Sofas' },
  { path: '/sliding-wardrobes', label: 'Sliding Wardrobes' },
  { path: '/tables', label: 'Tables' },
  { path: '/chairs', label: 'Chairs' },
  { path: '/headboards-beds', label: 'Headboards & Beds' },
  { path: '/cabinets-sideboards', label: 'Cabinets & Sideboards' }
];




const Furniture: React.FC = () => {
  return (
    <div>
      <h5 className={title}>FURNITURE</h5>
      <ul >
        {FURNITURE_LINKS.map(({ path, label }) => (
            <li  key={path} >                  
              <Link  className={spaceItem} to={path}>{label}</Link>               
            </li>
        ))}
      </ul>

    </div>
       
    );

};

export default Furniture;