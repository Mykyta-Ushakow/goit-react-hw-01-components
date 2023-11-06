import styled from 'styled-components';

const TransactionTable = styled('table')`
  width: 1400px;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: 30px;

  thead {
    color: #fff;
    border-radius: 5px;

    th {
      padding: 10px;
      background-color: #1e7b7b;
    }
  }

  td {
    padding: 5px;
    text-transform: capitalize;
    text-align: center;
  }

  .even-row {
    background-color: #b7b7b7;
  }
`;

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={item.id} className={index % 2 === 0 ? 'even-row' : null}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionTable>
  );
};
