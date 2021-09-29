import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

if (process.env.REACT_APP_MOCK_ENABLED) {
  const { worker } = require("./_msw_/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

