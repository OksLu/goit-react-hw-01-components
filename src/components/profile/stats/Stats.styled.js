import styled from "@emotion/styled";

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
