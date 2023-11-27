import SearchBar from '../SearchBar/SearchBar';
import ContentToolbar from '../ContentToolbar/ContentToolbar';
import TasksGrid from '../TasksGrid/TasksGrid';

import './MainContent.scss';
import TasksGridErrorBoundary from '../TasksGridErrorBoundary/TasksGridErrorBoundary';
import DashboardLayout from '../DashboardLayout/DashboardLayout';

const MainContent = () => {
  return (
    <DashboardLayout>
      <div className="main-content">
        <SearchBar />
        <ContentToolbar />
        <TasksGridErrorBoundary>
          <TasksGrid />
        </TasksGridErrorBoundary>
      </div>
    </DashboardLayout>
  );
};

export default MainContent;
