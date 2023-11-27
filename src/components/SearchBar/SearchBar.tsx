import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';

import placeholderImage from '../../assets/placeholder-profile-photo.jpg';

import './SearchBar.scss';
import { GET_USER_AVATAR } from '../../api/usersQueries';

const SearchBar = () => {
  const { data } = useQuery(GET_USER_AVATAR);

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchText, setSearchText] = useState('');

  const isThereASearchParam = searchParams.get('search');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchText.replace(' ', '').length > 0) {
      setSearchParams(`?search=${searchText}`);
    }
  };

  const handleClearSearchParams = () => {
    setSearchText('');
    setSearchParams('');
  };

  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <div className="icon">
          <Icon icon="iconoir:search" />
        </div>
        <div className="search-bar__form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              value={searchText}
              onChange={handleChange}
            />
          </form>
        </div>
        {isThereASearchParam ? (
          <button
            type="button"
            className="search-bar__clear-button"
            onClick={handleClearSearchParams}
          >
            <Icon icon="material-symbols:close" height={20} />
          </button>
        ) : null}
      </div>
      <div className="search-bar__profile-image">
        <Link to="/settings">
          <img
            className=""
            height="32"
            src={data?.profile?.avatar || placeholderImage}
            alt="Profile"
          />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
