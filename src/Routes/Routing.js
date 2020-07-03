import React from 'react';
import Product from '../Components/Products/index.jsx';
import Design from '../Components/Products/design.jsx';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const routing = (
    <Router>
      <div>
        <Route path="/" component={Design}></Route >
      </div>
    </Router>
)
export default routing;
