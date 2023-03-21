import PropTypes from 'prop-types';
import {
  Card,
  UserCard,
  Avatar,
  Name,
  Info,
  List,
  Item,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <UserCard>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </UserCard>
      <List>
        <Item>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </Item>
        <Item>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </Item>
        <Item>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </Item>
      </List>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
