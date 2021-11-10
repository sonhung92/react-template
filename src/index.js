import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ConnectedRouter } from 'connected-react-router';
import { browserHistory } from 'store/reducer';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-virtualized/styles.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './translations/i18n';
import App from './App';
import registerServiceWorker from './serviceWorker';
import './index.css';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={browserHistory}>
        <App />
      </ConnectedRouter>
    </Provider>,
    rootEl,
  );
}

if (module.hot) {
  module.hot.accept('./App.js', () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
