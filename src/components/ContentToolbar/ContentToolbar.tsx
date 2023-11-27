import { Icon } from '@iconify/react';

import useModalContext from '../../hooks/useModalContext';

import TasksForm from '../TasksForm/TasksForm';

import { TASKS_FORM_ACTION_TYPES } from '../../constants/taskForm';

import './ContentToolbar.scss';

const { CREATE } = TASKS_FORM_ACTION_TYPES;

const ContentToolbar = () => {
  const { showModal } = useModalContext();

  return (
    <div className="content-toolbar">
      <div className="content-toolbar__views">
        <button className="content-toolbar__button" type="button">
          <Icon icon="bi:list" height={20} />
        </button>
        <button className="content-toolbar__button active-view" type="button">
          <Icon icon="akar-icons:grid" height={20} />
        </button>
      </div>
      <div className="content-toolbar__add-task">
        <button
          className="content-toolbar__button"
          type="button"
          onClick={() => showModal(<TasksForm action={CREATE} />)}
        >
          <Icon icon="ic:outline-plus" height={20} />
        </button>
      </div>
    </div>
  );
};

export default ContentToolbar;
