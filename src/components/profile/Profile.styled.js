import styled from '@emotion/styled';

export const Card = styled.div`
  width: 490px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 25px auto;
  border-radius: 6px;
  background-color: rgba(138, 229, 236, 0.23);
`;
export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 32px;
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: grey;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  margin-top: 12px;
`;

export const Item = styled.li`
position: relative;
width: 70px;
height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid rgba(74, 150, 22, 0.18);
  background-color: white;
  }
`;
