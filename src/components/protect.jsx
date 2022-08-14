import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Protect = () => {
  const isAuth = localStorage.getItem('token');
  return ( 
    <Route path="/dashboard" render={() => (
      isAuth ? ( null ) : (
        <Redirect from="dashboard" to='/login' />
      )
    )} />
  );
}
 
export default Protect;