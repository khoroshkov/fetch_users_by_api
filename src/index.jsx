import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import { store } from './redux/store';
import rootSaga from './redux/sagas';

import './styles/react-notifications.css';
import './styles/styles.css';

import App from './components/App';

store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NotificationContainer />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
