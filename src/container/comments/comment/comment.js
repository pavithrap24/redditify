import React from "react";
import moment from "moment";
import { Grid, Typography, Avatar } from "@material-ui/core";

function Comment({ author, createdUTC, body }) {
  return (
    <>
      <Grid container wrap="nowrap" spacing={2} style={{ marginTop: "1em" }}>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography
            style={{ margin: "0.5em", textAlign: "left", fontSize: "0.7em" }}
          >
            {author} {moment.unix(createdUTC).fromNow()}
          </Typography>
          <Typography noWrap>{body}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Comment;
