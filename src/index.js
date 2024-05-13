import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// {
//   /* <Provider store={store}>
//   <React.StrictMode>
//     <BrowserRouter basename="/pickup-campers">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// </Provider> */
// }
