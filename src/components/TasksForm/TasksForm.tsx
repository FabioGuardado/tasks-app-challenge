import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_TASK, UPDATE_TASK } from '../../api/tasksQueries';

import useModalContext from '../../hooks/useModalContext';

import { ITask, Tags, PointEstimate } from '../../interfaces/task';

import './TaskForm.scss';

type TaskFormProps = {
  action: string;
  task?: ITask;
};

const INITIAL_STATE = {
  name: undefined,
  tags: [],
  dueDate: '',
  pointEstimate: undefined,
  assigneeId: undefined,
};

const TasksForm: React.FunctionComponent<TaskFormProps> = ({
  action,
  task,
}: TaskFormProps) => {
  TasksForm.defaultProps = {
    task: INITIAL_STATE,
  };

  const [executeQuery] = useMutation(
    action === 'create' ? CREATE_TASK : UPDATE_TASK
  );
  const { clearModal } = useModalContext();
  const [taskFields, setTaskFields] = useState(task);

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) =>
    setTaskFields(prevFields => ({
      ...prevFields,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    executeQuery();

    clearModal();
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <div className="task-form__group">
          <input
            type="text"
            name="name"
            id="name"
            value={taskFields?.name}
            placeholder="Task Title"
            className="task-title"
            onChange={handleFieldChange}
          />
        </div>

        <div className="task-form__selectors">
          <div className="task-form__selector">
            <select
              name="pointEstimate"
              id="pointEstimate"
              value={taskFields?.pointEstimate}
              placeholder="Estimate"
              onChange={handleFieldChange}
            >
              <option selected value="" disabled hidden>
                Estimate
              </option>
              <option value={PointEstimate.ZERO}>0 Points</option>
              <option value={PointEstimate.ONE}>1 Points</option>
              <option value={PointEstimate.TWO}>2 Points</option>
              <option value={PointEstimate.FOUR}>4 Points</option>
              <option value={PointEstimate.EIGHT}>8 Points</option>
            </select>
          </div>

          <div className="task-form__selector">
            <select
              name="assignee"
              id="assignee"
              defaultValue="Assignee"
              value={taskFields?.assigneeId}
              placeholder="Assignee"
              onChange={handleFieldChange}
            >
              <option value={PointEstimate.ZERO}>0 Points</option>
              <option value={PointEstimate.ONE}>1 Points</option>
              <option value={PointEstimate.TWO}>2 Points</option>
              <option value={PointEstimate.FOUR}>4 Points</option>
              <option value={PointEstimate.EIGHT}>8 Points</option>
            </select>
          </div>

          <div className="task-form__selector">
            <select
              name="tags"
              id="tags"
              value={taskFields?.tags}
              placeholder="Labels"
              onChange={handleFieldChange}
            >
              <option selected value="" disabled hidden>
                Labels
              </option>
              <option value={Tags.ANDROID}>ANDROID</option>
              <option value={Tags.IOS}>IOS</option>
              <option value={Tags.NODE_JS}>NODE JS</option>
              <option value={Tags.RAILS}>RAILS</option>
              <option value={Tags.REACT}>REACT</option>
            </select>
          </div>

          <div className="task-form__date-picker">
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              value={taskFields?.dueDate?.toLocaleString()}
              placeholder="Due Date"
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div className="task-form__buttons">
          <button
            type="button"
            className="task-form__buttons--cancel"
            onClick={clearModal}
          >
            Cancel
          </button>
          <button type="submit" className="task-form__buttons--action">
            {action === 'create' ? 'Create' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TasksForm;
