import { Icon } from '@iconify/react';
import placeholderImage from '../../assets/placeholder-profile-photo.jpg';

import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <div className="icon">
          <Icon icon="iconoir:search" />
        </div>
        <div className="search-bar__form">
          <form onSubmit={() => {}}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      <div className="search-bar__profile-image">
        <img className="" height="32" src={placeholderImage} alt="Profile" />
      </div>
    </div>
  );
};

export default SearchBar;
