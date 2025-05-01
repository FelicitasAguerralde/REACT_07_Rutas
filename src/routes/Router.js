import React from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Index } from "../components/Index";
import { Contact } from "../components/Contact";
import { Instalation } from "../components/Instalation";
import { Error } from "../components/Error";
import { Params } from "../components/Params";
import { ControlPanel } from "../components/ControlPanel";
import { Management } from "../components/Panel/Management";
import { IndexPanel } from "../components/Panel/IndexPanel";
import { Create } from "../components/Panel/Create";
import { About } from "../components/Panel/About";
import { Nav } from "react-bootstrap";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav variant="pills" className="navIndex">
        <Nav.Item>
          <NavLink
            to="/inicio"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Inicio
          </NavLink>
        </Nav.Item>
        <Nav.Item></Nav.Item>
        <Nav.Item>
          <NavLink
            to="/instalacion"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Instalación
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            to="/parametros"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Parámetros
          </NavLink>
        </Nav.Item>
        <NavLink
          to="/contacto"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Contacto
        </NavLink>
        <Nav.Item>
          <NavLink
            to="/panel"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Panel de Control
          </NavLink>
        </Nav.Item>
      </Nav>

      <section className="container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/inicio" element={<Index />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/instalacion" element={<Instalation />} />
          <Route path="/parametros/:nombre/:apellido" element={<Params />} />
          <Route path="/parametros/:nombre" element={<Params />} />
          <Route path="/parametros" element={<Params />} />
          <Route path="/panel/*" element={<ControlPanel />} />
          <Route path="/panel/inicio" element={<IndexPanel />} />
          <Route path="/panel/control" element={<ControlPanel />} />
          <Route path="/panel/crear-articulo" element={<Create />} />
          <Route path="/panel/gestionar-usuarios" element={<Management />} />
          <Route path="/panel/acerca-de" element={<About />} />

          <Route path="/redirigir" element={<Navigate to="/" />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};
