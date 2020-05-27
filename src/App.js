import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./Layout/Layout";
import NewsFeed from "./components/NewsFeed/NewsFeed";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/commets"></Route>
        <Route path="/" component={NewsFeed}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
