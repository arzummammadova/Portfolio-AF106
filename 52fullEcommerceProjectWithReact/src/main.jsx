import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './index.css';
import App from './App.jsx';
import store, { persistor } from './redux/store/Store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
