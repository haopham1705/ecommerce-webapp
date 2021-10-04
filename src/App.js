import Header from 'components/Header'
import HomePage from 'pages/HomePage'
import Product from 'pages/Product'
import Cart from 'pages/Cart'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

export default function App() {
  const loggedInUser = useSelector((state) => state.user.current)
  const isLoggedIn = JSON.stringify(loggedInUser) !== '{}'

  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/products" component={Product} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </React.Fragment>
  )
}
