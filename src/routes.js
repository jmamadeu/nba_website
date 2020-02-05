import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Home from "./pages/Home";
import NewsArticles from "./pages/Articles/News/Post";

export default function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/articles/:id" component={NewsArticles} />
      </Switch>
    </Layout>
  );
}
