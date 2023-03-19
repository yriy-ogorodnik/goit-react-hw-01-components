import { Profile } from 'components/Task-01-Profile/Profile';
import { Status } from 'components/Task-02-Status/Status';
import { FriendList } from 'components/Task-03-List-friends/FriendList';

import user from 'components/Task-01-Profile/user.json';
import data from 'components/Task-02-Status/data.json';
import friends from 'components/Task-03-List-friends/friends.json';

export const App = () => {
  return (
    <div style={wrapperStyle}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Status status={data} title="Upload stats" />
      <FriendList friends={friends} />
    </div>
  );
};

// стилі---------------------------
const wrapperStyle = {
  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};
