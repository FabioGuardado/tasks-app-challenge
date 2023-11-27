import { useQuery } from '@apollo/client';

import { GET_TASKS } from '../../api/tasksQueries';

import Spinner from '../Spinner/Spinner';
import EmptyList from '../EmptyList/EmptyList';

import { ITask } from '../../interfaces/task';

import { STATUS_COLUMN_NAMES } from '../../constants/tasks';

import './TasksGrid.scss';
import TasksColumn from '../TasksColumn/TasksColumn';

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

  console.log(groupedData);

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
