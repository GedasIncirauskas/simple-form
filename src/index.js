import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import reducer from "./store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import Authe from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";
import "./index.scss";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App>
          <Route exact path="/" component={Authe} />
          <Route path="/dashboard" component={Dashboard} />
        </App>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
