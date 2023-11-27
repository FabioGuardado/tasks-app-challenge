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
    <Link to={path}>
      <li
        className={`nav-item ${
          pathname === path ? 'nav-item--active' : 'nav-item--base'
        }`}
      >
        <Icon height={20} icon={icon} />
        <span>{label}</span>
      </li>
    </Link>
  );
};

export default NavItem;
