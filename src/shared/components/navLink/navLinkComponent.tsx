import React, { useEffect, useState } from "react";
import { link, linkContainer, spaceItem, spaceItemActive } from "./navLink.style";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { getAllCategories } from "~shared/services/categorios.service";
import { Category } from "~types/categories";

type Props = {
  room: Category[];
};

export const NavLinkComponent: React.FC<Props> = ({ room }) => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames(spaceItem, { [spaceItemActive]: isActive });

  return (
    <div className={linkContainer}>
      <ul className={linkContainer}>
        {room.map(({ id, title }) => (
          <li className={link} key={id}>
            <NavLink className={getLinkClass} to={`/${title.toLowerCase()}`}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};