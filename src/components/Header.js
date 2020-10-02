import React from "react";
import "./Header.css";
import Typical from "react-typical";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Title"> Florent Voinot</h1>
      <p className="Subtitle">{""}</p>
      <Typical
        wrapper="p"
        steps={[
          2500,
          "I'm a full-stack developer.",
          500,
          "React.js, Node.js Lovers.",
          500,
          "Open to work.",
          500,
        ]}
      />
    </div>
  );
};

export default Header;
