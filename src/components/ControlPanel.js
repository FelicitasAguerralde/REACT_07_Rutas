import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const ControlPanel = () => {
  return (
    <div>
      <Nav className="nav-control-panel" variant="underline">
        <Nav.Item>
          <NavLink to="/panel/inicio">Inicio</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/panel/crear-articulo">Crear artículo</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/panel/gestionar-usuarios">Gestionar usuarios</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/panel/acerca-de">Acerca de</NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};
