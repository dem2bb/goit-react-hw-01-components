import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionsHistory from './components/Transactions/Transactions';
import user from './database/user.json';
import stats from './database/statistical-data.json';
import friends from './database/friends.json';
import transactions from './database/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        user={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={stats} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </>
  );
};

export default App;
