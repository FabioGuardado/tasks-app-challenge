import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter basename="/tasks-app-challenge/">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
