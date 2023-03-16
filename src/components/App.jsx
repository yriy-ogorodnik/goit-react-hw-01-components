import { Profile } from 'components/Task-01-Profile/Profile';
import { Status } from 'components/Task-02-Status/Status';

import user from 'components/Task-01-Profile/user.json';
import data from 'components/Task-02-Status/data.json';

export const App = () => {
  return (
    <div
      style={wrapperStyle}
    >
       <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Status status = {data} 
      title = 'Upload stats'
      />
    </div>
  
    
  );
};

// стилі---------------------------
const wrapperStyle = {
  height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101'
}