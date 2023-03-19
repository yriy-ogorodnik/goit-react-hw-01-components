import PropTypes from 'prop-types';
import StatusCSS from './status.module.css';

export const Status = ({ status, title }) => {
  return (
    <section className={StatusCSS.statistics}>
      {title && <h2 className={StatusCSS.title}>{title}</h2>}

      <ul className={StatusCSS.statlist}>
        {status.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={StatusCSS.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={StatusCSS.label}>{label}</span>
            <span className={StatusCSS.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function randomColor() {
  var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}

Status.propTypes = {
  status: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
