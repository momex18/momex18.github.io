import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import Valentine from './pages/Valentine/Valentine';
import reportWebVitals from './reportWebVitals';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
      {/* <App /> */}
      <Valentine />
  </StyledEngineProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
