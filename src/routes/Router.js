import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { Articles } from "../components/Articles";
import { Error } from "../components/Error";
import { Person } from "../components/Person";

export const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articulo"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Articulo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/persona"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Persona
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/articulo" element={<Articles />} />
          <Route path="/persona/:nombre/:apellido" element={<Person />} />
          <Route path="/persona/:nombre" element={<Person />} />
          <Route path="/persona" element={<Person />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
