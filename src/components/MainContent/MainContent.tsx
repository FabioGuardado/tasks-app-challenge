import SearchBar from '../SearchBar/SearchBar';
import ContentToolbar from '../ContentToolbar/ContentToolbar';
import TasksGrid from '../TasksGrid/TasksGrid';
import './MainContent.scss';

const MainContent = () => {
  return (
    <div className="main-content">
      <SearchBar />
      <ContentToolbar />
      <TasksGrid />
    </div>
  );
};

export default MainContent;
