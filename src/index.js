import ReactDOM from 'react-dom';
import './index.css';
import './style/custom.css';

import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';

import * as serviceWorker from './serviceWorker';
import routing from './Routes/Routing.js';


const target = document.getElementById('erw-root');
if (target) { ReactDOM.render(routing, target); }

serviceWorker.unregister();
