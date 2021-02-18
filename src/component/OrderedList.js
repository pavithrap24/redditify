import React from "react";

function OrderedList({ children, ...remProps }) {
  return (
    <li {...remProps} style={{ listStyle: "none" }}>
      {children}
    </li>
  );
}

export default OrderedList;
