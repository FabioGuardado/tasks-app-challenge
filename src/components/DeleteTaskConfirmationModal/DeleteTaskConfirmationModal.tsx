import { useMutation } from '@apollo/client';

import useModalContext from '../../hooks/useModalContext';
import { DELETE_TASK } from '../../api/tasksQueries';

import './DeleteTaskConfirmationModal.scss';

const DeleteTaskConfirmationModal = () => {
  const { clearModal } = useModalContext();
  const [deleteTask] = useMutation(DELETE_TASK);

  return (
    <div className="delete-task-confirmation">
      <h3 className="delete-task-confirmation__title">
        Are you sure you want to delete this task?
      </h3>
      <div className="delete-task-confirmation__buttons">
        <button
          type="button"
          onClick={clearModal}
          className="delete-task-confirmation__buttons--cancel"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => deleteTask}
          className="delete-task-confirmation__buttons--action"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DeleteTaskConfirmationModal;
