import { useMutation } from '@apollo/client';

import { ITask } from '../../interfaces/task';
import TaskCard from '../TaskCard/TaskCard';

import { GET_TASKS, UPDATE_TASK_STATUS } from '../../api/tasksQueries';

import capitalizeWords from '../../utils/capitalizeWords';

import './TasksColumn.scss';

type PropsTypes = {
  columnName: string;
  count: number;
  tasks: ITask[];
};

const TasksColumn = ({ columnName, count, tasks }: PropsTypes) => {
  const [executeMutation] = useMutation(UPDATE_TASK_STATUS, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const taskId = e.dataTransfer.getData('id');
    executeMutation({
      variables: {
        id: taskId,
        status: columnName,
      },
    });
  };

  return (
    <div
      className={`tasks-grid__column ${
        count === 0 && 'tasks-grid__column--empty'
      }`}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    >
      <h4 className="tasks-grid__title">{`${capitalizeWords(
        columnName
      )} (${count})`}</h4>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksColumn;
