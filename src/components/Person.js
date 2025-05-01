import React from "react";
import { useParams } from "react-router-dom";

export const Person = () => {
  const { nombre, apellido } = useParams();

  return (
    <div>
      Person
      {!nombre && <h1>No hay ninguna persona para mostrar</h1>}
      {nombre && (
        <h1>
          Página de: {nombre} {apellido}
        </h1>
      )}
    </div>
  );
};
