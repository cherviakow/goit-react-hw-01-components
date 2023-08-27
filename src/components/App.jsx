import user from 'data/user';
import Profile from "./Profile/Profile";

import data from 'data/data';
import { Statistics } from './Statistics/Statistics';

import friends from 'data/friends';
import { FriendList } from './FrendList/FriendList';


export default function App(){
  return (
    <div>
      <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
      />

<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />


    </div>

    
  );
}


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
