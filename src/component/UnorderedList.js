import React from "react";

function UnorderedList({ children, ...remProps }) {
  return (
    <ul {...remProps} style={{ listStyle: "none" }}>
      {children}
    </ul>
  );
}

export default UnorderedList;
