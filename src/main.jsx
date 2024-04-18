import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'

// redux is an statemanagement library and it is there to solve the prop drilling problem
// we are using redux-toolkit which is built on top of redux (generally to reduce complexity and boilerplate of Redux)
ReactDOM.createRoot(document.getElementById('root')).render(
  // we are wrapping our app with provider so that we can use redux and we are providing the store location
  <Provider store={store}>
    <App />
  </Provider>,
)
