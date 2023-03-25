import React, { useEffect, useState } from "react";
import { BLOGS } from "../utils/constants";

const List = () => {
  const [blogs, setBlogs] = useState(BLOGS);

  return (
    <div className="main-container">
      {blogs.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <p>Written By: {item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
