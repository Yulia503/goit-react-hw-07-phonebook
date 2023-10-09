import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { contactStore } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={contactStore}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
