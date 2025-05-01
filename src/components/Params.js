import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Params = () => {
  const { nombre, apellido } = useParams();

  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);

  const send = (e) => {
    e.preventDefault();
    const newName = e.target.nombre.value;
    const newSurname = e.target.apellido.value;

    if (!newName || !newSurname) {
      setShowAlert(true); // Muestra el alerta si los campos están vacíos
      return;
    }

    navigate(`/parametros/${newName}/${newSurname}`);
  };

  return (
    <div className="params">
      <h2>Prueba de uso de parámetros por URL</h2>
      <p>
        Este componente de React, llamado Params, tiene una doble función dentro
        de la aplicación:
      </p>
      <p>
        En primer lugar,{" "}
        <strong>muestra dinámicamente información de una persona</strong> si su
        nombre y apellido están presentes como parámetros en la URL actual.
        Utilizando el poder de React Router, extrae estos valores directamente
        de la dirección web y los presenta en un encabezado. Si no hay
        información de nombre y apellido en la URL al cargar el componente,
        mostrará un mensaje indicando que no hay ninguna persona para mostrar.
      </p>
      <p>
        En segundo lugar, <strong>proporciona un formulario interactivo</strong>{" "}
        que permite al usuario ingresar un nuevo nombre y apellido. Al enviar
        este formulario, el componente utiliza la función de navegación de React
        Router para construir una nueva URL que incluye los valores ingresados
        (siguiendo el patrón /persona/[nombre]/[apellido]) y redirige la
        aplicación a esa nueva dirección.
      </p>
      <p>
        Además, el componente incluye una validación básica del formulario. Si
        el usuario intenta enviar el formulario dejando los campos de nombre o
        apellido vacíos, se muestra una alerta visual utilizando React
        Bootstrap, informando que ambos campos son obligatorios. Esta alerta
        desaparece cuando el usuario interactúa con ella o completa los campos.
      </p>

      {!nombre && <h3>No hay ninguna persona para mostrar</h3>}
      {nombre && (
        <h3>
          Página de:{" "}
          <span className="important">
            {nombre} {apellido}
          </span>
        </h3>
      )}

      <Form className="form" onSubmit={send}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Nombre"
            name="nombre"
          />
          <Form.Label>Apellido:</Form.Label>
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Apellido"
            name="apellido"
          />
          <Button className="my-3" variant="dark" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

      {/* Mostrar alerta si showAlert es true */}
      {showAlert && (
        <Alert
          variant="warning"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>Los campos no pueden estar vacíos</Alert.Heading>
          <p className="mb-0">Por favor, completa todos los campos.</p>
        </Alert>
      )}
    </div>
  );
};
