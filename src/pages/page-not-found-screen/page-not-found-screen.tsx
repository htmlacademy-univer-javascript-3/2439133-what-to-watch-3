import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function PageNotFoundScreen(){
  return(
    <React.Fragment>
      <h1>404</h1>
      <h1>Not found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </React.Fragment>
  );
}

export default PageNotFoundScreen;
