import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <h1>Error 404</h1>
      <strong>Page not found</strong>
      <br/>
      <Link to="/inicio">Volver al inicio</Link>
    </>
  );
};
