import React from "react";
import Anchor from "../component/Anchor";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function NavBar() {
  const style = {
    padding: "1em",
  };
  return (
    <div>
      <AppBar color="secondary">
        <Toolbar>
          <Anchor to="/">
            <Typography style={style}>Redditify</Typography>
          </Anchor>
          <Anchor to="/favorites">
            <Typography style={style}>Favorites</Typography>
          </Anchor>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default NavBar;
