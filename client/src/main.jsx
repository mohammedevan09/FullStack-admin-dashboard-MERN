import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import globalSlice from './state/index.jsx'
import { setupListeners } from '@reduxjs/toolkit/dist/query/index.js'
import { api } from './state/api.jsx'

const store = configureStore({
  reducer: {
    global: globalSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
})
setupListeners(store.dispatch)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
