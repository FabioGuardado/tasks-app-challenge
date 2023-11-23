import { useQuery } from '@apollo/client';

import TaskCard from '../TaskCard/TaskCard';

import { GET_TASKS } from '../../api/tasksQueries';

import Spinner from '../Spinner/Spinner';
import EmptyList from '../EmptyList/EmptyList';

import './TasksGrid.scss';

const TasksGrid = () => {
  const result = useQuery(GET_TASKS);
  console.log(result);

  if (result.loading) return <Spinner />;

  if (result.error) throw new Error(result.error.message);

  if (result.data?.length === 0 && !result.error) return <EmptyList />;

  return (
    <div className="tasks-grid">
      <div className="tasks-grid__column">
        <h4 className="tasks-grid__title">Working (03)</h4>
        <TaskCard />
        <TaskCard />
      </div>
      <div className="tasks-grid__column">
        <h4 className="tasks-grid__title">In Progress (03)</h4>
        <TaskCard />
        <TaskCard />
      </div>
      <div className="tasks-grid__column">
        <h4 className="tasks-grid__title">Completed (03)</h4>
        <TaskCard />
      </div>
    </div>
  );
};

export default TasksGrid;
