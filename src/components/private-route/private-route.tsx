import {Navigate} from 'react-router-dom';
import React from 'react';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.ReactNode;
}

function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ?
      <section>
        children
      </section>
      : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
