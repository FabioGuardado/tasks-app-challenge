import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import MainContent from './components/MainContent/MainContent';
import Profile from './components/Profile/Profile';

import APP_PATHNAMES from './constants/pathnames';

const { BASE, HOME, PROFILE } = APP_PATHNAMES;

const App = () => {
  return (
    <BrowserRouter basename={BASE}>
      <Routes>
        <Route path={PROFILE} element={<Profile />} />
        <Route path={HOME} element={<MainContent />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
