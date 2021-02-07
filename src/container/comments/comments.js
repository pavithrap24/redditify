import React from "react";
import { Divider } from "@material-ui/core";
import Comment from "./comment/comment";

function Comments({ allComments }) {
  const comment = (p) => {
    return (
      <Comment
        author={p.data.author}
        createdUTC={p.data.created_utc}
        body={p.data.body}
        key={p.data.id}
      />
    );
  };

  let commentsRecursive = (allComments) => {
    return allComments.map((p) => {
      if (p.data.replies !== undefined && p.data.replies !== "") {
        return (
          <>
            {comment(p)}
            {p.data.replies.data.children !== "" &&
              commentsRecursive(p.data.replies.data.children)}
          </>
        );
      }
      return (
        <>
          {comment(p)}
          <Divider />
        </>
      );
    });
  };

  return <>{commentsRecursive(allComments)}</>;
}

export default Comments;
