import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { Transactions } from './Transactions';
import user from '../fixed/user.json';
import data from '../fixed/data.json';
import friends from '../fixed/friends.json';
import transactions from '../fixed/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        marginTop: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile {...user} />
      <Statistics elements={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
