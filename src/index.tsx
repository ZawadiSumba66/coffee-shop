import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import CustomRouter from './routes/CustomRouter';
import './index.css';
import store from './redux/store';
import Bus from './redux/helpers/bus';
import history from './routes/history';

declare global {
  interface Window {
    flash?: any;
  }
}

window.flash = (message: string, type = 'success') => Bus.emit('flash', ({ message, type }));
ReactDOM.render(
  <React.StrictMode>
    <CustomRouter history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </CustomRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
