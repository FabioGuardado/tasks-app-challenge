import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.scss';

type PropsTypes = {
  children: JSX.Element;
};

const DashboardLayout = ({ children }: PropsTypes) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
