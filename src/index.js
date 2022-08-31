import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import HyperMove from './HyperMove';

import ScoresProvider from "./context/leaderBoard"
import AlertProvider from "./context/alert"
import AlertComponent from './Components/Alert';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ScoresProvider>
<AlertProvider>
    <HyperMove/>
    </AlertProvider>
    </ScoresProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
