import React from 'react';
import Home from '../Components/home.jsx';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const routing = (
    <Router>
      <div>
        <Route path="/" component={Home}></Route >
      </div>
    </Router>
)
export default routing;
