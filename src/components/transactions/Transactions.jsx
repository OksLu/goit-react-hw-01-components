import PropTypes from "prop-types";
import {
  Table,
  TableHeader,
  TableCell,
  TableTitle,
  TableRow,
} from "./Transactions.styled";

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </TableHeader>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableCell>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.prototype = {
  transactions: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amaunt: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
