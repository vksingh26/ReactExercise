import React from "react";

import Aux from "../Auxiliary/Auxiliary";
import Toolbar from '../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main>{props.children}</main>
  </Aux>
);
export default Layout;
