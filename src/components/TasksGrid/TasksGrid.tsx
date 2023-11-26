import { useQuery } from '@apollo/client';

import TaskCard from '../TaskCard/TaskCard';

import { GET_TASKS } from '../../api/tasksQueries';

import Spinner from '../Spinner/Spinner';
import EmptyList from '../EmptyList/EmptyList';

import { ITask } from '../../interfaces/task';

import { STATUS_COLUMN_NAMES } from '../../constants/tasksGrid';

import './TasksGrid.scss';

const TasksGrid = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <Spinner />;

  if (error) throw new Error(error.message);

  if (data.tasks?.length === 0 && !error) return <EmptyList />;

  type GroupedDataType = {
    [propName: string]: ITask[];
  };

  type DinamycGroupedDataObjectKey<T> = keyof T;

  const groupedData = data.tasks.reduce(
    (acc: GroupedDataType, currentValue: ITask) => {
      acc[currentValue.status as DinamycGroupedDataObjectKey<typeof acc>] = [
        ...(acc[
          currentValue.status as DinamycGroupedDataObjectKey<typeof acc>
        ] || []),
        currentValue,
      ];
      return acc;
    },
    {}
  );

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

  console.log(groupedData);

  return (
    <div className="tasks-grid">
      {STATUS_COLUMN_NAMES.map((columnName: string) => (
        <div className="tasks-grid__column">
          <h4 className="tasks-grid__title">{`${capitalizeColumnName(
            columnName
          )} (${groupedData[columnName]?.length || 0})`}</h4>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      ))}
    </div>
  );
};

export default TasksGrid;
