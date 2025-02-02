import userData from "./userData.json";
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
    </>
  );
};

export default App;
