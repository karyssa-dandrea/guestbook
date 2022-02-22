import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PrivateRoute({ children, ...rest }) {
  const { user } = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
