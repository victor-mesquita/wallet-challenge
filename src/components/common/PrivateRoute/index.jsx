import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, render, ...rest }) => {
  const token = localStorage.getItem('authToken');

  if (render && token) {
    return (<Route {...rest} render={render} />);
  }

  return (<Route
    {...rest}
    render={(props) => {
      if (token && props.location.pathname === '/auth') {
        return <Redirect to={{ pathname: '/home' }} />;
      } else if (!token && props.location.pathname !== '/auth') {
        return (
          <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
        );
      }

      return <Component {...props} />;
    }}
  />);
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func,
  location: PropTypes.object,
  token: PropTypes.string
};