import styled from 'styled-components';
import { Profile } from './Profile';
import userData from './info/user.json';

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
      <Profile user={userData} />
    </div>
  );
};
