import styled from 'styled-components';
import { FriendListItem } from './FriendListItem';

const FriendsUl = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    background-color: #fff;
    box-shadow: 0 0 10px black;
    display: flex;
    align-items: center;
    width: 500px;
    height: 120px;

    padding-left: 20px;
    gap: 20px;

    .avatar {
      height: 100px;
      width: 100px;
      display: block;
      border-radius: 5px;
    }
  }
`;

export const FriendList = ({ list }) => {
  return (
    <FriendsUl>
      {list.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </FriendsUl>
  );
};
