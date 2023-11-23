import SearchBar from '../SearchBar/SearchBar';
import ContentToolbar from '../ContentToolbar/ContentToolbar';
import TasksGrid from '../TasksGrid/TasksGrid';

import './MainContent.scss';
import TasksGridErrorBoundary from '../TasksGridErrorBoundary/TasksGridErrorBoundary';

const MainContent = () => {
  return (
    <div className="main-content">
      <SearchBar />
      <ContentToolbar />
      <TasksGridErrorBoundary>
        <TasksGrid />
      </TasksGridErrorBoundary>
    </div>
  );
};

export default MainContent;
