import { Icon } from '@iconify/react';

import placeholderImage from '../../assets/placeholder-profile-photo.jpg';
import TaskCardTag from '../TaskCardTagFactory/TaskCardTagFactory';

import './TaskCard.scss';

const TaskCard = () => {
  return (
    <div className="task-card">
      <div className="task-card__header">
        <h4 className="task-card__title">Slack</h4>
        <div className="task-card__menu">
          <button type="button" className="menu-toggler">
            <Icon icon="tabler:dots" height={20} />
          </button>
        </div>
      </div>

      <div className="task-card__time-details">
        <h4>2 Points</h4>
        <TaskCardTag type="on-time" label="today" />
      </div>

      <div className="task-card__tags-list">
        <TaskCardTag type="ios" label="ios App" />
        <TaskCardTag type="android" label="android" />
      </div>

      <div className="task-card__footer">
        <div className="user-photo">
          <img className="" height="32" src={placeholderImage} alt="Profile" />
        </div>

        <div className="icons-box">
          <div>
            <span>
              <Icon icon="heroicons-outline:paper-clip" height={14} />
            </span>
          </div>
          <div>
            <span>
              5
              <Icon icon="system-uicons:hierarchy" height={14} />
            </span>
          </div>
          <div>
            <span>
              3
              <Icon icon="tabler:message-circle" height={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;