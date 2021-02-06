import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Pics from "./container/Pics";
import UseQueryParams from "./hook/useQueryParams/useQueryParams";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <UseQueryParams />
    // <BrowserRouter>
    //   <div className="App">
    //     <NavBar />
    //     <Switch>
    //       <Route path="/" exact component={Home} />
    //       <Route path="/subreddit/pics" exact component={Pics} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
