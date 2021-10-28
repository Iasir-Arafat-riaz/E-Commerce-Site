import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hoock/useAuth';

const PrivateRoute = ({children , ...others}) => {
    const {user}=useAuth()
    return (
        <Route
        {...others}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;