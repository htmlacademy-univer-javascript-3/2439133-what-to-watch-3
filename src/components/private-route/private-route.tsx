import {Navigate} from 'react-router-dom';
import React from 'react';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.ReactNode;
}

function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return(
    <div>
      {
        authorizationStatus === AuthorizationStatus.Auth
          ? children
          : <Navigate to={AppRoute.SignIn} />
      }
    </div>);
}

export default PrivateRoute;
