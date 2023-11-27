import { useMutation } from '@apollo/client';

import useModalContext from '../../hooks/useModalContext';
import { GET_TASKS, DELETE_TASK } from '../../api/tasksQueries';

import './DeleteTaskConfirmationModal.scss';

type PropsTypes = {
  taskId: string;
};

const DeleteTaskConfirmationModal = ({ taskId }: PropsTypes) => {
  const { clearModal } = useModalContext();
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  const handleDeleteTask = () => {
    deleteTask({ variables: { id: taskId } });
    clearModal();
  };

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
          onClick={handleDeleteTask}
          className="delete-task-confirmation__buttons--action"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DeleteTaskConfirmationModal;
