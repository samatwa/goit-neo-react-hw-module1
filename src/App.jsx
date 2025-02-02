import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import Profile from "./components/Profile/Profile.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        image={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
