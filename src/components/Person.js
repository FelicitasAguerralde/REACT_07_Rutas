import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Person = () => {
  const { nombre, apellido } = useParams();

  const navigate = useNavigate();
  const send = (e) => {
    e.preventDefault();
    const newName = e.target.nombre.value;
    const newSurname = e.target.apellido.value;

    if (!newName || !newSurname) {
      alert("Los campos no pueden estar vacíos");
      return;
    }

    navigate(`/persona/${newName}/${newSurname}`);
  };

  return (
    <div>
      Person
      {!nombre && <h1>No hay ninguna persona para mostrar</h1>}
      {nombre && (
        <h1>
          Página de: {nombre} {apellido}
        </h1>
      )}

      <form onSubmit={send}>
        <input type="text" placeholder="Nombre" name="nombre" />
        <input type="text" placeholder="Apellido" name="apellido" />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};
