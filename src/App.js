import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Pics from "./container/Pics";
import Post from "./container/post/post";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/subreddit/pics" exact component={Pics} />
          <Route
            path="/r/pics/comments/:fullname/:post/"
            exact
            component={Post}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
