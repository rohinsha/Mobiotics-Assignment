import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Forms from './Forms';
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Forms />, document.getElementById('root'));
registerServiceWorker();
