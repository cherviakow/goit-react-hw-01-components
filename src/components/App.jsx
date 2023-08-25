import user from 'data/user';
import Profile from "./Profile/Profile";
import data from './data/data';

export default function App(){
  return (
    <div>
      <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      />
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
