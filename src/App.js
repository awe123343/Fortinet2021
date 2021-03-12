import "./styles.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Layout from "./Layout";
import { Post } from "./Post";
import { Todo } from "./Todo";
import { User } from "./User";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Post />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
