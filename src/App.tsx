import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import MainContent from './components/MainContent/MainContent';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter basename="/tasks-app-challenge">
      <Routes>
        <Route path="/settings" element={<Profile />} />
        <Route path="/" element={<MainContent />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
