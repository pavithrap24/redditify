import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import AlternativeComponent from "./component/AlternativeComponent";
import PicsComponent from "./component/PicsComponent";
import GifsComponent from "./component/GifsComponent";
import AdviceAnimalsComponent from "./component/AdviceAnimalsComponent";
import CatsComponent from "./component/CatsComponent";
import ImagesComponent from "./component/ImagesComponent";
import PhotoshopBattlesComponent from "./component/PhotoshopBattlesComponent";
import HmmmComponent from "./component/HmmmComponent";
import AllComponent from "./component/AllComponent";
import AwwComponent from "./component/AwwComponent";
import Favorites from "./component/Favorites";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/subreddit/alternative"
            exact
            component={AlternativeComponent}
          />
          <Route path="/subreddit/pics" exact component={PicsComponent} />
          <Route path="/subreddit/gifs" exact component={GifsComponent} />
          <Route
            path="/subreddit/adviceanimals"
            exact
            component={AdviceAnimalsComponent}
          />
          <Route path="/subreddit/cats" exact component={CatsComponent} />
          <Route path="/subreddit/images" exact component={ImagesComponent} />
          <Route
            path="/subreddit/photoshopbattles"
            exact
            component={PhotoshopBattlesComponent}
          />
          <Route path="/subreddit/hmmm" exact component={HmmmComponent} />
          <Route path="/subreddit/all" exact component={AllComponent} />
          <Route path="/subreddit/aww" exact component={AwwComponent} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
