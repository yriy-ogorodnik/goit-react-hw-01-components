import PropTypes from 'prop-types';
import ProfileCSS from './profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={ProfileCSS.profile}>
    <div className={ProfileCSS.description}>
      <img src={avatar} alt={username} className={ProfileCSS.avatar} />
      <p className={ProfileCSS.name}>{username}</p>
      <p className={ProfileCSS.tag}>{tag}</p>
      <p className={ProfileCSS.location}>{location}</p>
    </div>

    <ul className={ProfileCSS.stats}>
      <li className={ProfileCSS.item}>
        <span className={ProfileCSS.label}>Followers</span>
        <span className={ProfileCSS.quantity}>{stats.followers}</span>
      </li>
      <li className={ProfileCSS.item}>
        <span className={ProfileCSS.label}>Views</span>
        <span className={ProfileCSS.quantity}>{stats.views}</span>
      </li>
      <li className={ProfileCSS.item}>
        <span className={ProfileCSS.label}>Likes</span>
        <span className={ProfileCSS.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

//   prop-types надає ряд валідаторів для перевірки коректності
//  отриманих типів даних
Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
