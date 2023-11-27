import { useQuery } from '@apollo/client';

import DashboardLayout from '../DashboardLayout/DashboardLayout';

import { GET_USER_PROFILE } from '../../api/usersQueries';

import ProfileCard from '../ProfileCard/ProfileCard';
import Spinner from '../Spinner/Spinner';

import './Profile.scss';

const Profile = () => {
  const { loading, data } = useQuery(GET_USER_PROFILE);
  console.log(loading);

  return (
    <DashboardLayout>
      <div className="profile-container">
        {loading ? <Spinner /> : <ProfileCard profile={data.profile} />}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
