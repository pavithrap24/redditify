import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBarComponent from "./NavBarComponent";
import PostComponent from "./PostComponent";

function PicsComponent() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get("https://www.reddit.com/r/pics.json").then(({ data }) => {
      setResult(data.data.children);
      setLoading(false);
    });
  }, []);

  let picPosts = result.map((item) => (
    <PostComponent
      key={item.data.id}
      postedBy={item.data.author_fullname}
      title={item.data.title}
      imageUrl={item.data.url_overridden_by_dest}
    />
  ));

  return (
    <div>
      <NavBarComponent />
      <h1>Showing Results for r/pics</h1>
      {loading ? <div>Loading...</div> : picPosts}
    </div>
  );
}

export default PicsComponent;
