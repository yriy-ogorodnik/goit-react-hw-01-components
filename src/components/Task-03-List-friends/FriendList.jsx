import { Item, SpanStatus } from 'components/Task-03-List-friends/FriendList.styled';

export const FriendList = ({friends}) =>{
   return (
      <ul className="friend-list">
  {friends.map(friend =>(
   <Item key={friend.id} className="item">
   <SpanStatus isOnline={friend.isOnline}></SpanStatus>
   
 
   <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
   <p className="name">{friend.name}</p>
 </Item>
  ))

  }
     </ul>
   )
}


