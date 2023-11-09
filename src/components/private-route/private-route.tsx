import {Navigate} from 'react-router-dom';
import React from 'react';

type PrivateRouteProps = {
  isAuthorized: boolean;
  children: React.ReactNode;
}

function PrivateRoute(props: PrivateRouteProps) {
  const {isAuthorized, children} = props;

  if(!isAuthorized){
    return <Navigate to="/login"/>;
  }

  return(
    <section>
      {children}
    </section>);
}

export default PrivateRoute;
