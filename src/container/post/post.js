import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { Grid, Typography, Container, Paper } from "@material-ui/core";

function Post() {
  const pathname = window.location.pathname;
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.reddit.com/${pathname}.json`).then(({ data }) => {
      setPost(data[0].data.children);
      setLoading(false);
    });
  }, [pathname]);

  const postContent = (post) => {
    return (
      <Grid item xs={12} sm={7} key={post.data.id}>
        <Paper style={{ padding: "1em" }} elevation={5}>
          <Typography variant="subtitle1" style={{ fontSize: "10px" }}>
            Posted by {post.data.author_fullname}{" "}
            {moment.unix(post.data.created_utc).fromNow()}
          </Typography>
          <Typography>{post.data.title}</Typography>
          <ReactMarkdown source={post.data.selftext} />
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
        <Grid container spacing={3} justify="center">
          {post.map(postContent)}
        </Grid>
      </Container>
    </>
  );
}

export default Post;
