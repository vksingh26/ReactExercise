import React from "react";
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";
const toolbar = (props) => (
  <header className="Toolbar">
    <nav className="nav DesktopOnly">
        <NavigationItems />
    </nav>
  </header>
);

export default toolbar;