import styled from 'styled-components';

import userData from '../info/user.json';
import statisticsData from '../info/data.json';
import friendsData from '../info/friends.json';
import transactionsData from '../info/transactions.json';

import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory';

const AppDiv = styled('div')`
  padding-top: 30,
  padding-bottom: 30,
  display: 'flex',
  flex-direction: 'column',
  gap: 100,
  justify-content: 'center',
  align-items: 'center',
  font-size: 40,
  color: '#010101',
  background-color: '#c2baba',
`;

export const App = () => {
  return (
    <AppDiv>
      <Profile user={userData} />
      <Statistics stats={statisticsData} title="Upload stats" />
      <FriendList list={friendsData} />
      <TransactionHistory items={transactionsData} />
    </AppDiv>
  );
};
