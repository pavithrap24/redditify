import React from "react";
import { useLocation } from "react-router-dom";

const useQueryParams = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id");
  console.log("search ", search);
  console.log("queryParams ", queryParams);
  console.log("id ", id);
  return "";
};

export default useQueryParams;
