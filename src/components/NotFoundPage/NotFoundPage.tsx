import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="message">
        <h1 className="message__title">Not Found!</h1>
        <p className="message__description">
          Seems like the page you were looking for is not available.
        </p>
      </div>

      <Link to="/" className="go-home-link">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
