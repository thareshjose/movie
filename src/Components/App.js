import React from "react";
import Home from "./Home";
import reducer from "../store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { hashHistory } from "react-dom";
import WatchList from "./WatchList";

function App() {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/watch-list" exact strict component={WatchList} />
          <Route component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
