import React from 'react';
import {Link} from 'react-router-dom';

function PageNotFoundScreen(){
  return(
    <React.Fragment>
      <h1>404</h1>
      <h1>Not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </React.Fragment>
  );
}

export default PageNotFoundScreen;
