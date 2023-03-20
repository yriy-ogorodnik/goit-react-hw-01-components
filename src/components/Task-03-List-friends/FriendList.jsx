import { FriendListItem } from 'components/Task-03-List-friends/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => FriendListItem(friend))}
    </ul>
  );
};
