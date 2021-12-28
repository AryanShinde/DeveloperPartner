import React from "react";
import { Link } from "react-router-dom";
const LeftAside = () => {
  return (
    <div className="main">
      <ul>
        <li className="list l1">
          <Link to="/">Home</Link>
        </li>
        <li className="list l2">
          {" "}
          <Link to="/profiles">Explore</Link>{" "}
        </li>

        <li className="list l3">
          <Link to="/dashboard">Profile</Link>
        </li>
        <li className="list post l4">
          <Link to="/posts">Post</Link>
        </li>
      </ul>
    </div>
  );
};
export default LeftAside;
