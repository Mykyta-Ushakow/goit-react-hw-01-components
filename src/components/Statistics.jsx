import styled from 'styled-components';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const StatSection = styled('section')`
  background-color: #a7a7a7;
  border-radius: 5px;
  width: 500px;

  .title {
    text-align: center;
    font-size: 50px;
    margin: 50px auto;
  }

  .stat-list {
    display: flex;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;

    .item {
      border: 1px solid black;
      width: 100px;
      height: 120px;
      text-align: center;
      color: white;
      text-shadow: #000000 1px 0 10px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5px;
    }

    .item:first-child {
      border-radius: 0 0 0 10px;
    }

    .item:last-child {
      border-radius: 0 0 10px 0;
    }

    .label {
      font-size: 25px;
    }

    .percentage {
      font-size: 35px;
      font-weight: bold;
    }
  }
`;

export const Statistics = ({ stats, title }) => {
  return (
    <StatSection>
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            className="item"
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage"> {stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </StatSection>
  );
};
