import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App.jsx';
// Reducers
// Login Dashboard
import saveTokenReducer from './Dashboard/Login/reducers/userReducer.js';
import notificacionReducer from './Dashboard/Login/reducers/notificacion.js';


const rootReducer = combineReducers({
  saveTokenReducer : saveTokenReducer,
  notificacionReducer : notificacionReducer
})

const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </StrictMode>,
) 