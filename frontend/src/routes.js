import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from './services/auth'
import LoginPage from './pages/login'
import CadastroPage from './pages/cadastro'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route path='/cadastro' component={CadastroPage} />
      <PrivateRoute path='/app' component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes