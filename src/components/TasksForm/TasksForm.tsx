import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { CREATE_TASK, GET_TASKS, UPDATE_TASK } from '../../api/tasksQueries';
import { GET_USERS } from '../../api/usersQueries';

import useModalContext from '../../hooks/useModalContext';

import TagsSelector from '../TagsSelector/TagsSelector';

import { PointEstimate, ITaskForm, Status, Tags } from '../../interfaces/task';
import { IUserSummary } from '../../interfaces/users';

import {
  TASKS_FORM_ACTION_TYPES,
  FORM_INITIAL_STATE,
  ACTION_BUTTONS_LABELS,
} from '../../constants/taskForm';

import formatInputDate from '../../utils/formatInputDate';

import './TaskForm.scss';

const { CREATE } = TASKS_FORM_ACTION_TYPES;
const { CREATE: CREATE_LABEL, UPDATE: UPDATE_LABEL } = ACTION_BUTTONS_LABELS;

type TaskFormProps = {
  action: string;
  task?: Partial<ITaskForm>;
};

const TasksForm: React.FunctionComponent<TaskFormProps> = ({
  action,
  task,
}: TaskFormProps) => {
  TasksForm.defaultProps = {
    task: FORM_INITIAL_STATE,
  };

  const { data, loading } = useQuery(GET_USERS);

  const [executeMutation] = useMutation(
    action === CREATE ? CREATE_TASK : UPDATE_TASK,
    { refetchQueries: [{ query: GET_TASKS }] }
  );
  const { clearModal } = useModalContext();

  const [taskFields, setTaskFields] = useState<Partial<ITaskForm> | undefined>(
    task
  );
  const [selectedLabels, setSelectedLabels] = useState<Tags[]>(
    task?.tags || []
  );

  const handleListItemClick = (tagName: Tags) => {
    let newTagsArray: Tags[] = selectedLabels;
    if (selectedLabels.includes(tagName)) {
      newTagsArray = selectedLabels.filter(tag => tag !== tagName);
    } else {
      newTagsArray.push(tagName);
    }

    setSelectedLabels(newTagsArray);
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let newValue: string | string[] = e.target.value;
    if (e.target.name === 'tags') {
      newValue = [e.target.value];
    }

    const updatedObject = {
      ...taskFields,
      [e.target.name]: newValue,
    };

    setTaskFields(updatedObject);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    executeMutation({
      variables: {
        id: taskFields?.id,
        assigneeId: taskFields?.assigneeId,
        name: taskFields?.name,
        dueDate: taskFields?.dueDate,
        pointEstimate: taskFields?.pointEstimate,
        status: taskFields?.status || Status.TODO,
        tags: selectedLabels,
      },
    });

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
              name="assigneeId"
              id="assigneeId"
              defaultValue="Assignee"
              value={taskFields?.assigneeId || taskFields?.assignee?.id}
              placeholder="Assignee"
              onChange={handleFieldChange}
              disabled={loading}
            >
              <option selected value="" disabled hidden>
                Assignee
              </option>
              {!loading
                ? data.users?.map((user: IUserSummary) => (
                    <option key={user.id} value={user.id}>
                      {user.fullName}
                    </option>
                  ))
                : null}
            </select>
          </div>

          <TagsSelector
            selectedLabels={selectedLabels}
            handleListItemClick={handleListItemClick}
          />

          <div className="task-form__date-picker">
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              value={formatInputDate(taskFields?.dueDate || '')}
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
            {action === CREATE ? CREATE_LABEL : UPDATE_LABEL}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TasksForm;
