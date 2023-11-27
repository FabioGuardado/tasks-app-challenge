import moment from 'moment';

import { IUser } from '../../interfaces/users';

import placeholderImage from '../../assets/placeholder-profile-photo.jpg';
import capitalizeWords from '../../utils/capitalizeWords';

import './ProfileCard.scss';

type PropTypes = {
  profile: IUser;
};

const ProfileCard = ({ profile }: PropTypes) => {
  const createdAtFormattedDate = moment(profile.createdAt)
    .format('dddd DD MMM YYYY / HH:mm:ss A')
    .toString();

  const updatedAtFormattedDate = moment(profile.updatedAt)
    .format('dddd DD MMM YYYY / HH:mm:ss A')
    .toString();

  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <div className="profile-card__image">
          <img
            src={profile.avatar || placeholderImage}
            alt="User"
            height="120"
          />
        </div>
        <div className="profile-card__summary">
          <h2 className="profile-card__summary-title">{profile.fullName}</h2>
          <p className="profile-card__summary-text">
            {capitalizeWords(profile.type)}
          </p>
        </div>
      </div>
      <div className="profile-card__body">
        <div className="profile-card__detail-group">
          <h4 className="profile-card__detail-title">E-Mail</h4>
          <p className="profile-card__detail-text">{profile.email}</p>
        </div>
        <div className="profile-card__detail-group">
          <h4 className="profile-card__detail-title">Created At</h4>
          <p className="profile-card__detail-text">{createdAtFormattedDate}</p>
        </div>
        <div className="profile-card__detail-group">
          <h4 className="profile-card__detail-title">Updated At</h4>
          <p className="profile-card__detail-text">{updatedAtFormattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
