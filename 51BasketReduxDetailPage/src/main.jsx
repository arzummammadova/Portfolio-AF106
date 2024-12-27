import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';
import { store,persistor } from './redux/Store.jsx';
createRoot(document.getElementById('root')).render(
  <PersistGate  persistor={persistor}>
  <Provider store={store}>
    <App />
  </Provider>
  </PersistGate>,
)
