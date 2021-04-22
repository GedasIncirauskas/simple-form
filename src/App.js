import React from "react";
import "./App.scss";

import PropTypes from "prop-types";

const App = (props) => <div className="App">{props.children}</div>;

App.propTypes = {
  children: PropTypes.any,
};

export default App;
