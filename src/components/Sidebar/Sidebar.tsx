import RavnLogo from '../../assets/ravn.svg';
import NavItem from '../NavItem/NavItem';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={RavnLogo} alt="Ravn Logo" />
      </div>

      <div className="sidebar__nav">
        <ul className="nav-list">
          <NavItem path="/" icon="akar-icons:grid" label="Dashboard" />
          <NavItem path="/my-task" icon="bi:list" label="My Task" />
          <NavItem path="/settings" icon="bi:person-fill" label="Profile" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
