import React from "react";
import user from "./user.json";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Profile
      user={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

export default App;
