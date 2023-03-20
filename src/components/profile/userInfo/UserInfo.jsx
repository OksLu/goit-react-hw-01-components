import { UserCard, Avatar, Name, Info } from "./UserInfo.styled";
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
