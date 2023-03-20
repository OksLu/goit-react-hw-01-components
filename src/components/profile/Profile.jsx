import PropTypes from "prop-types";
import { Stats } from "./stats/Stats";
import { UserInfo } from "./userInfo/UserInfo";
import { Card } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <UserInfo
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <Stats stats={stats} />
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
  }),
};
