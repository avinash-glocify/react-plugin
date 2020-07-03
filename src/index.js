import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './style/style.css';

import * as serviceWorker from './serviceWorker';
import routing from './Routes/Routing.js';


const target = document.getElementById('erw-root');
if (target) { ReactDOM.render(routing, target); }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
