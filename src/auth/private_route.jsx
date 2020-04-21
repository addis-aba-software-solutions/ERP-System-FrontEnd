import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import getToken from './token'

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getToken ? 
      <Component {...props} /> : 
      <Redirect to={{ pathname: '/signin'}} />}
    />
  )
}
 
export default PrivateRoute;