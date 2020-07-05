import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/style.css';
import './style/custom.css';

import'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import Popper from'popper.js';
import'bootstrap/dist/js/bootstrap.bundle.min';

import * as serviceWorker from './serviceWorker';
import routing from './Routes/Routing.js';


const target = document.getElementById('erw-root');
if (target) { ReactDOM.render(routing, target); }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
