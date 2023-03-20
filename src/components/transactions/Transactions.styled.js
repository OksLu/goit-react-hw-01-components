import styled from "@emotion/styled";

export const Table = styled.table`
  width: 490px;
  border: 1px solid #eeeeee;
  margin: 28px auto;
`;
export const TableHeader = styled.thead`
  width: 100%;
  background: #9bdaf0;
`;
export const TableTitle = styled.th`
  text-transform: uppercase;
  font-size: 20px;
  color: white;
  width: 200px;
  padding: 20px 0;
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(138, 229, 236, 0.23);
  }
`;
export const TableCell = styled.td`
  padding: 15px 0;
  font-weight: 500;
  font-size: 18px;
  transform: translateX(30%);
  } ;
`;
