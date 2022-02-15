import React from "react";
import LeftAside from "../components/LeftAside";
import News from "../components/News";
import "../styles/app.scss";
const Layout = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="left-aside">
        <LeftAside />
      </div>

      <div className="main right">{props.children}</div>
      <div className="right-aside">
        <News />
      </div>
    </div>
  );
};

export default Layout;
