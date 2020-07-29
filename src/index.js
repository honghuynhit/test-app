import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchPage from "./pages/searchPage.js";
import BookDetailPage from "./pages/bookDetailPage";
import "./styles.css";

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/test-app/" exact component={SearchPage} />
        <Route path="/test-app/book/:bookId" exact component={BookDetailPage} />
        <Route component={NoMatchRoute} />
      </Switch>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
