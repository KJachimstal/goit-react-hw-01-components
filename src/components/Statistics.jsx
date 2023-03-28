import PropTypes from 'prop-types';

export const Statistics = ({ elements, title = 'UPLOAD STATS' }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {elements.map(({ label, percentage, id }) => (
          <li className="item" key={id}>
            <span className="item-label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  elements: PropTypes.array.isRequired,
};
