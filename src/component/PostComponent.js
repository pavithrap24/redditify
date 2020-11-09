import React from "react";
import postComponent from "./postComponent.css";

function PostComponent(props) {
  return (
    <div className="post-component">
      <h6 className="postedBy">{props.postedBy}</h6>
      <h3 className="title">{props.title}</h3>
      {props.imageUrl !== undefined ? (
        <img className="img" src={props.imageUrl} alt="" />
      ) : (
        ""
      )}
    </div>
  );
}

export default PostComponent;
