import { clearConfigCache } from 'prettier';
import React from 'react';
import PropTypes from 'prop-types';
import TransactionsItem from './TransactionsItem/TransactionsItem';
import styles from './Transactions.module.css';

const TransactionsHistory = ({ items }) => {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return <TransactionsItem key={item.id} {...item} />;
      })}
    </table>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionsHistory;
