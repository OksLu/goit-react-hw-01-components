import { Item } from 'components/profile/Profile.styled';
import PropTypes from 'prop-types';
import { FriendName, IsOnline } from '../friendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <IsOnline type={isOnline}></IsOnline>
      <img src={avatar} alt={name} width="58" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
