import PropTypes from 'prop-types';
import { UserCard, Avatar, Name, Info } from './UserInfo.styled';

export const UserInfo = ({ avatar, username, tag, location }) => {
  return (
    <UserCard>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Info>@{tag}</Info>
      <Info>{location}</Info>
    </UserCard>
  );
};

UserInfo.prototype = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
