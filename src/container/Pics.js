import React, { useEffect, useState } from "react";
import Anchor from "../component/Anchor";
import moment from "moment";
import axios from "axios";
import {
  Grid,
  Typography,
  Paper,
  Button,
  Container,
  Badge,
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function Pics() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get("https://www.reddit.com/r/pics.json").then(({ data }) => {
      setResult(data.data.children);
      setLoading(false);
    });
  }, []);

  const imageUi = (item) => {
    return (
      item.data.url_overridden_by_dest !== undefined && (
        <Button width="fit-content">
          <img
            className="img"
            src={item.data.url_overridden_by_dest}
            alt=""
            width="50%"
          />
        </Button>
      )
    );
  };

  const itemUi = (item) => {
    return (
      <Grid item xs={12} sm={7} key={item.data.id}>
        <Paper style={{ padding: "1em" }} elevation={5}>
          <Typography variant="subtitle1" style={{ fontSize: "10px" }}>
            Posted by {item.data.author_fullname}{" "}
            {moment.unix(item.data.created_utc).fromNow()}
          </Typography>
          <Typography>
            <Anchor to={item.data.permalink}>{item.data.title}</Anchor>
          </Typography>
          <a href={item.data.url} style={{ textDecoration: "none" }}>
            <Typography variant="subtitle1" style={{ fontSize: "10px" }}>
              {item.data.url}
            </Typography>
          </a>
          {imageUi(item)}
          <Badge
            badgeContent={item.data.num_comments}
            color="primary"
            style={{ marginTop: "1em" }}
            max={99999999999}
          >
            <CommentIcon />
          </Badge>
          <Badge
            badgeContent={item.data.ups}
            color="primary"
            style={{ marginTop: "1em" }}
            max={99999999999}
          >
            <ArrowUpwardIcon style={{ paddingLeft: "1em" }} />
          </Badge>
        </Paper>
      </Grid>
    );
  };

  if (loading) {
    return (
      <Grid container spacing={3} justify="center">
        <Typography>Loading..</Typography>
      </Grid>
    );
  }
  return (
    <>
      <Container>
        <Typography variant="h5">Showing Results for r/pics</Typography>
        <Grid container spacing={3} justify="center">
          {result.map(itemUi)}
        </Grid>
      </Container>
    </>
  );
}

export default Pics;
