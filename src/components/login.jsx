import React from "react";

const Login = ({ onClose }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar el formulario de inicio de sesión
    // ...
    onClose(); // Cierra el formulario después de procesar
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Agrega los campos de inicio de sesión (nombre de usuario, contraseña, etc.) */}
        {/* ... */}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
