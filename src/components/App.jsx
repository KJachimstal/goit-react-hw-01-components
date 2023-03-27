import { Profile } from 'components/Profile';
import { Statistics } from './Statistics';
import user from '../fixed/user.json';
import data from '../fixed/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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
    </div>
  );
};
