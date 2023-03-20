import PropTypes from "prop-types";
import { FriendListItem } from "./friendListItem/FriendListItem";
import { List } from "../profile/stats/Stats.styled";
import { StatisticsSection } from "../statistics/Statistics.styled";

export const FriendsList = ({ friends }) => {
  return (
    <StatisticsSection>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </List>
    </StatisticsSection>
  );
};

FriendsList.prototype = {
  friends: PropTypes.arrayOf({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
