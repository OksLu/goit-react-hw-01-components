import PropTypes from 'prop-types';
import { Name, Item, List } from '../profile/Profile.styled';
import { StatisticsSection } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Name>{title}</Name>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: randomHexColor() }}>
              <span>{label}</span>
              <span>{percentage}</span>
            </Item>
          );
        })}
      </List>
    </StatisticsSection>
  );
};

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
