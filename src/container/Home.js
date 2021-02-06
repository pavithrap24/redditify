import React from "react";
import Anchor from "../component/Anchor";

function Home() {
  return (
    <div>
      <h1>Redditify</h1>
      <Anchor to="/subreddit/pics">Pics</Anchor>
    </div>
  );
}

export default Home;
