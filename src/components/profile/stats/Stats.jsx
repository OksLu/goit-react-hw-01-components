import PropTypes from 'prop-types';
import { List, Item } from './Stats.styled';

export const Stats = ({ stats }) => {
  return (
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
  );
};

Stats.prototype = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};