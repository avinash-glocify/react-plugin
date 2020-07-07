import React from 'react';
import Home from '../Components/home.jsx';
import HomeTest from '../Components/homeTest.jsx';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const routing = (
    <Router>
      <div>
        <Route  path="/" component={HomeTest}></Route >
      </div>
    </Router>
)
export default routing;
