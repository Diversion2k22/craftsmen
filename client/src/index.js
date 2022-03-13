import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import ThemeContextWrapper from './Context/ThemeContextWrapper';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <ThemeContextWrapper>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeContextWrapper>,
  document.getElementById('root')
);
