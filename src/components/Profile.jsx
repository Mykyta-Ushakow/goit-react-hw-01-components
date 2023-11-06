import styled from 'styled-components';

const ProfileWrap = styled('div')`
  background-color: #ffffff;
  max-width: 360px;
  border-radius: 10px;

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
    margin: 30px 0;

    .avatar {
      display: block;
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    p {
      margin: 0;
      padding-top: 10px;
      color: gray;
    }

    .name {
      color: inherit;
      font-weight: bold;
      padding-top: 20px;
      font-size: 30px;
    }
  }

  .stats {
    margin: 0;
    padding: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    list-style: none;
    background-color: #d2d2d2;
    border-radius: 0 0 10px 10px;

    li {
      width: 120px;
      height: 100px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;
      gap: 7px;
      background-color: #d2d2d2;

      border: 1px solid black;

      .quantity {
        font-weight: bold;
      }
    }

    li:first-child {
      border-radius: 0 0 0 10px;
    }

    li:last-child {
      border-radius: 0 0 10px 0;
    }
  }
`;

export const Profile = ({ user }) => {
  return (
    <ProfileWrap>
      <div className="description">
        <img src={user.avatar} alt="User avatar" className="avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </ProfileWrap>
  );
};
