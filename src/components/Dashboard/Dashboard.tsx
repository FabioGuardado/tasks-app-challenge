import MainContent from '../MainContent/MainContent';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;
