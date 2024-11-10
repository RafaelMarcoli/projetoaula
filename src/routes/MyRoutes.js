import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({
  element: Element,
  isClosed = false,
  ...rest
}) {
  const isLoggedIn = false;
  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate to="/login" replace state={{ prevPath: location.pathname }} />
    );
  }

  return <Element {...rest} />;
}

MyRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  isClosed: PropTypes.bool,
};
