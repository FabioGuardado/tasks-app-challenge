import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

import './NavItem.scss';

type PropTypes = {
  path: string;
  icon: string;
  label: string;
};

const NavItem = ({ path, icon, label }: PropTypes) => {
  const { pathname } = useLocation();

  return (
    <Link to="/">
      <li className={`nav-item ${pathname === path && 'nav-item--active'}`}>
        <Icon height={20} icon={icon} />
        <span>{label}</span>
      </li>
    </Link>
  );
};

export default NavItem;
