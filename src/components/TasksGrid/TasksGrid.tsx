import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';

import { GET_TASKS, GET_TASKS_BY_NAME } from '../../api/tasksQueries';

import Spinner from '../Spinner/Spinner';
import EmptyList from '../EmptyList/EmptyList';
import TasksColumn from '../TasksColumn/TasksColumn';

import { ITask } from '../../interfaces/task';

import { STATUS_COLUMN_NAMES } from '../../constants/tasks';

import './TasksGrid.scss';

const TasksGrid = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');

  const { loading, error, data } = useQuery(
    searchText ? GET_TASKS_BY_NAME : GET_TASKS,
    { variables: { name: searchText } }
  );

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

  return (
    <div className="tasks-grid">
      {STATUS_COLUMN_NAMES.map((columnName: string) => (
        <TasksColumn
          key={columnName}
          columnName={columnName}
          count={groupedData[columnName]?.length || 0}
          tasks={groupedData[columnName] || []}
        />
      ))}
    </div>
  );
};

export default TasksGrid;
