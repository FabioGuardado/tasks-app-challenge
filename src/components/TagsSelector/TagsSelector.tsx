import { useState } from 'react';
import { Icon } from '@iconify/react';

import { Tags } from '../../interfaces/task';

import ICON_SIZES from '../../constants/iconSizes';

import './TagsSelector.scss';

type PropsTypes = {
  selectedLabels: Tags[];
  handleListItemClick: (tagName: Tags) => void;
};

const TagsSelector = ({ selectedLabels, handleListItemClick }: PropsTypes) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>();

  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  return (
    <div
      role="button"
      className="task-form__tags-selector"
      tabIndex={0}
      onClick={toggleSubMenu}
      onKeyDown={toggleSubMenu}
    >
      <div className="task-form__tags-selector-button">
        <span>Labels</span>
        <Icon icon="iconamoon:arrow-down-2-duotone" />
      </div>
      <div
        className={`task-form__tags-selector-dropdown ${
          isSubMenuOpen
            ? 'task-form__tags-selector-dropdown--visible'
            : 'task-form__tags-selector-dropdown--hidden'
        }`}
      >
        <ul className="dropdown-list" onMouseLeave={toggleSubMenu}>
          <li>
            <button
              type="button"
              className="list-item-button"
              onClick={() => handleListItemClick(Tags.ANDROID)}
            >
              <Icon
                height={ICON_SIZES.SMALL}
                icon={`${
                  selectedLabels.includes(Tags.ANDROID)
                    ? 'mingcute:checkbox-line'
                    : 'carbon:checkbox'
                }`}
              />
              <span>ANDROID</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="list-item-button"
              onClick={() => handleListItemClick(Tags.IOS)}
            >
              <Icon
                height={ICON_SIZES.SMALL}
                icon={`${
                  selectedLabels.includes(Tags.IOS)
                    ? 'mingcute:checkbox-line'
                    : 'carbon:checkbox'
                }`}
              />
              <span>IOS</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="list-item-button"
              onClick={() => handleListItemClick(Tags.NODE_JS)}
            >
              <Icon
                height={ICON_SIZES.SMALL}
                icon={`${
                  selectedLabels.includes(Tags.NODE_JS)
                    ? 'mingcute:checkbox-line'
                    : 'carbon:checkbox'
                }`}
              />
              <span>NODE JS</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="list-item-button"
              onClick={() => handleListItemClick(Tags.RAILS)}
            >
              <Icon
                height={ICON_SIZES.SMALL}
                icon={`${
                  selectedLabels.includes(Tags.RAILS)
                    ? 'mingcute:checkbox-line'
                    : 'carbon:checkbox'
                }`}
              />
              <span>RAILS</span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="list-item-button"
              onClick={() => handleListItemClick(Tags.REACT)}
            >
              <Icon
                height={ICON_SIZES.SMALL}
                icon={`${
                  selectedLabels.includes(Tags.REACT)
                    ? 'mingcute:checkbox-line'
                    : 'carbon:checkbox'
                }`}
              />
              <span>REACT</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TagsSelector;
