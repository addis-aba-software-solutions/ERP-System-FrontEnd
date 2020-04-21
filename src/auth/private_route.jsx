import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import  getToken  from './token';
 
const PrivateRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return loggedIn|| getToken ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: {
                prevLocation: path,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute