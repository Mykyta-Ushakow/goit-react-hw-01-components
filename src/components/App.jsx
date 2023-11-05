import styled from 'styled-components';
import { Profile } from './Profile';
import userData from './info/user.json';

console.log(userData);

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
      }}
    >
      <Profile>{userData.username}</Profile>
    </div>
  );
};
