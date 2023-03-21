import PropTypes from 'prop-types';
import { FriendListItem } from './friendListItem/FriendListItem';
import { StatisticsSection } from '../statistics/Statistics.styled';
import { List } from 'components/profile/Profile.styled';

export const FriendsList = ({ friends }) => {
  return (
    <StatisticsSection>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          );
        })}
      </List>
    </StatisticsSection>
  );
};

FriendsList.prototype = {
  friends: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
