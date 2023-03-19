import PropTypes from 'prop-types';
import StatusCSS from './status.module.css';

export const Status = ({ status, title }) => {
  return (
    <section className={StatusCSS.statistics}>
      {title && <h2 className={StatusCSS.title}>{title}</h2>}

      <ul className={StatusCSS.statlist}>
        {status.map(stat => (
          <li key={stat.id} className={StatusCSS.item} style={{backgroundColor:randomColor()}}>
            <span className={StatusCSS.label}>{stat.label}</span>
            <span className={StatusCSS.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function randomColor() {
  var color = '#'+Math.floor(Math.random()*16777215).toString(16);
  return color;
}
