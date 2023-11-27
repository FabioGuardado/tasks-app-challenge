import { ITask } from '../../interfaces/task';
import TaskCard from '../TaskCard/TaskCard';

import './TasksColumn.scss';

type PropsTypes = {
  columnName: string;
  count: number;
  tasks: ITask[];
};

const capitalizeColumnName = (columnName: string) => {
  const words = columnName.split('_');
  const capitalizedWords = words.map(
    (word: string) => word.charAt(0) + word.toLowerCase().slice(1)
  );

  return capitalizedWords.reduce(
    (acc, currentWord: string) => `${acc} ${currentWord}`,
    ''
  );
};

const TasksColumn = ({ columnName, count, tasks }: PropsTypes) => {
  return (
    <div
      className={`tasks-grid__column ${
        count === 0 && 'tasks-grid__column--empty'
      }`}
    >
      <h4 className="tasks-grid__title">{`${capitalizeColumnName(
        columnName
      )} (${count})`}</h4>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksColumn;
