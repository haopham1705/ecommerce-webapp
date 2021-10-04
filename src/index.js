import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { SnackbarProvider } from 'notistack'

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
