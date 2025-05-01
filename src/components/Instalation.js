import React from "react";

export const Instalation = () => {
  return (
    <div>
      <h2>1. Instalación:</h2>
      <p>
        Primero, instala la librería react-router-dom en tu proyecto usando npm
        o yarn: npm install react-router-dom</p>
      <h2>2. Envolver tu Aplicación con &lt;BrowserRouter&gt;:</h2>
      <p>
      En el punto de entrada de tu aplicación (generalmente index.js o App.js),
      importa y envuelve tu componente principal (App) con el componente{" "}
      <span>&lt;BrowserRouter&gt; &lt;/BrowserRouter&gt;</span>
      </p>
      <p>Esto habilita el enrutamiento en tu aplicación, utilizando la API del historial del navegador.</p>
      <h2>3.  Definir tus Rutas con &lt;Routes&gt; y &lt;Route&gt;:</h2>
      <p>Dentro de tu componente App o en un componente dedicado al enrutamiento, importa y utiliza los componentes &lt;Routes&gt; (como contenedor) y &lt;Route&gt; para definir las rutas de tu aplicación.</p>
    <h2>4. Crear Enlaces de Navegación con &lt;Link&gt;:</h2>
    <p>Para permitir a los usuarios navegar entre las rutas sin recargar la página, utiliza el componente &lt;Link&gt; en lugar de la etiqueta &lt;a&gt; tradicional</p>
    <h2>5. Acceder a Parámetros de Ruta con useParams():</h2>
    <p>Si tienes rutas con segmentos dinámicos (parámetros), como /users/:id, puedes acceder al valor de esos parámetros dentro del componente renderizado utilizando el hook useParams()</p>
    </div>
  );
};
