import React from "react";

const buttons = ["Service", "About Us", "News", "Contact", "Sign In"];

const Navigation = () => {
  return (
    <div className="nav">
      <h1>Dummy</h1>

      <ul>
        {buttons.map((item, key) => {
          return (
            <li key={key}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
