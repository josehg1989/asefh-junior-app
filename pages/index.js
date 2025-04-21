
import React from 'react';

export default function Home() {
  const handleClick = (opcion) => {
    alert("Seleccionaste: " + opcion + ". Esta función se agregará pronto.");
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px', fontFamily: 'Arial' }}>
      <img src="/logo.png" alt="ASEFH Logo" width="100" />
      <h1>ASEFH JUNIOR</h1>
      <p>Bienvenido al asistente de ASEFH.</p>
      <p>Aquí podrás consultar tus opciones y servicios disponibles.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', alignItems: 'center' }}>
        <button onClick={() => handleClick("Simular préstamo")}>💰 Simular préstamo</button>
        <button onClick={() => handleClick("Conocer productos ASEFH")}>📘 Conocer productos ASEFH</button>
        <button onClick={() => handleClick("Hablar con Samy Maldonado")}>📞 Hablar con Samy Maldonado</button>
        <button onClick={() => handleClick("Ver contactos de ASEFH")}>📇 Ver contactos de ASEFH</button>
      </div>
    </div>
  );
}
