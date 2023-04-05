// import logo from './logo.svg';
// import React {useState} from "React";
import React, { useState } from "react";
import './App.css';


  function CollapsibleList() {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
  return (
    <div className="App">
       <div onClick={toggleCollapse} className="banner">
        {isCollapsed ? "Show List" : "Hide List"}
      </div>
      {!isCollapsed && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default CollapsibleList;

