import { ITask } from '../../interfaces/task';
import TaskCard from '../TaskCard/TaskCard';

import capitalizeWords from '../../utils/capitalizeWords';

import './TasksColumn.scss';

type PropsTypes = {
  columnName: string;
  count: number;
  tasks: ITask[];
};

const TasksColumn = ({ columnName, count, tasks }: PropsTypes) => {
  return (
    <div
      className={`tasks-grid__column ${
        count === 0 && 'tasks-grid__column--empty'
      }`}
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
