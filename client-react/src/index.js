import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'antd/dist/antd.css';
import axios from './utils/request';
React.Component.prototype.http = axios;

ReactDOM.render(<App />, document.getElementById('root'));
