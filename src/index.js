import React from 'react';
import * as ReactDOMClient from 'react-dom/client'; //needed for new version of React: 18
import App from './App';
import './styles.css';

//in React 18, the below replaces the old way of rendering your app
const container = document.querySelector('#root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />);