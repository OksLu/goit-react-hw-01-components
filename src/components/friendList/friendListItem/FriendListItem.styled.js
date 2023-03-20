import styled from "@emotion/styled";

export const IsOnline = styled.span`
  position: absolute;
  top: 50%;
  left: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.type) {
      case true:
        return "green";
      case false:
        return "grey";
      default:
        return "black";
    }
  }};
`;

export const FriendName = styled.p`
  font-weight: 500;
  font-size: 24px;
`;
