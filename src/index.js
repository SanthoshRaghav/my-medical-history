import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './assets/styles/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// hot module replacement

if (module.hot) {
	module.hot.accept();
}
