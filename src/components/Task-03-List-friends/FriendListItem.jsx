import PropTypes from 'prop-types';
import {
  Item,
  SpanStatus,
} from 'components/Task-03-List-friends/FriendList.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item key={id} className="item">
      <SpanStatus isOnline={isOnline}></SpanStatus>

      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
