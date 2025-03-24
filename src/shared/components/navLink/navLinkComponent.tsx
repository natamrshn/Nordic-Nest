import React from "react";
import { link, linkContainer, spaceItem, spaceItemActive } from "./navLink.style";
import { NavLink } from "react-router-dom";
import { SPACE_LINKS } from "~shared/constants/spaceLink";
import classNames from "classnames";

export const NavLinkComponent: React.FC = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(spaceItem, { [spaceItemActive]: isActive });

  return (
    <div className={linkContainer}>
      <ul className={linkContainer}>
        {SPACE_LINKS.map(({ path, label }) => (
          <li className={link} key={path}>
            <NavLink className={getLinkClass} to={path}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
