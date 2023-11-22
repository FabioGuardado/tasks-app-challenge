import TaskCard from '../TaskCard/TaskCard';
import './TasksGrid.scss';

const TasksGrid = () => {
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
