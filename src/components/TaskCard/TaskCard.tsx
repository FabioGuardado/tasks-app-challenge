import { useState } from 'react';
import { Icon } from '@iconify/react';

import placeholderImage from '../../assets/placeholder-profile-photo.jpg';
import TaskCardTag from '../TaskCardTagFactory/TaskCardTagFactory';

import useModalContext from '../../hooks/useModalContext';
import TasksForm from '../TasksForm/TasksForm';
import DeleteTaskConfirmationModal from '../DeleteTaskConfirmationModal/DeleteTaskConfirmationModal';

import { ITask } from '../../interfaces/task';

import { TASKS_ESTIMATION_IN_NUMBERS } from '../../constants/tasks';
import { TASKS_FORM_ACTION_TYPES } from '../../constants/taskForm';

import calculateDateDifference from '../../utils/calculateDateDifference';

import './TaskCard.scss';

const { UPDATE } = TASKS_FORM_ACTION_TYPES;

type PropsTypes = {
  task: ITask;
};

const TaskCard = ({ task }: PropsTypes) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const { showModal } = useModalContext();

  const toggleMenuButton = () => setIsSubMenuOpen(!isSubMenuOpen);

  const handleClickEditButton = () => {
    showModal(<TasksForm action={UPDATE} task={task} />);
    toggleMenuButton();
  };

  const handleClickDeleteButton = () => {
    showModal(<DeleteTaskConfirmationModal taskId={task?.id || ''} />);
    toggleMenuButton();
  };

  return (
    <div className="task-card">
      <div className="task-card__header">
        <h4 className="task-card__title">{task.name}</h4>
        <div className="task-card__menu">
          <button
            type="button"
            className="menu-toggler"
            onClick={toggleMenuButton}
          >
            <Icon icon="tabler:dots" height={20} />
          </button>
          <div
            className={`task-card__submenu ${
              isSubMenuOpen
                ? 'task-card__submenu--open'
                : 'task-card__submenu--hidden'
            }`}
          >
            <button
              type="button"
              onClick={handleClickEditButton}
              className="task-card__submenu-button"
            >
              <Icon icon="mingcute:pencil-line" height={16} />
              Edit
            </button>
            <button
              type="button"
              onClick={handleClickDeleteButton}
              className="task-card__submenu-button"
            >
              <Icon icon="material-symbols:delete-outline" height={16} />
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="task-card__time-details">
        <h4>{`${
          TASKS_ESTIMATION_IN_NUMBERS[
            task.pointEstimate as keyof typeof TASKS_ESTIMATION_IN_NUMBERS
          ]
        } Points`}</h4>
        <TaskCardTag type={calculateDateDifference(task?.dueDate || '')} />
      </div>

      <div className="task-card__tags-list">
        {task.tags?.map(tag => <TaskCardTag key={tag} type={tag} />)}
      </div>

      <div className="task-card__footer">
        <div className="user-photo">
          <img
            className=""
            height="32"
            src={task.assignee?.avatar || placeholderImage}
            alt="Profile"
          />
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
