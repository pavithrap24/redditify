import React from "react";
import { Divider } from "@material-ui/core";
import Comment from "./comment/comment";
import OrderedList from "../../component/OrderedList";
import UnorderedList from "../../component/UnorderedList";

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
            <OrderedList style={{ listStyle: "none" }}>
              {comment(p)}
            </OrderedList>
            <UnorderedList style={{ listStyle: "none" }}>
              <OrderedList style={{ listStyle: "none" }}>
                {p.data.replies.data.children !== "" &&
                  commentsRecursive(p.data.replies.data.children)}
              </OrderedList>
            </UnorderedList>
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
