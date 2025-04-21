import { useState } from 'react';

export default function Home() {
  const [dni, setDni] = useState('');
  const [dob, setDob] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const [aportaciones] = useState(15000);
  const [prestamo] = useState(6000);

  const login = () => {
    if (dni === '0801199912345' && dob === '08/01/1999') {
      setAuthenticated(true);
    } else {
      alert('Datos incorrectos. Por favor verificá tu DNI y fecha de nacimiento.');
    }
  };

  if (!authenticated) {
    return (
      <main style={{ textAlign: 'center', marginTop: '50px' }}>
        <img src="/logo.png" alt="ASEFH Logo" width={100} />
        <h1>ASEFH JUNIOR</h1>
        <input placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} /><br />
        <input placeholder="Fecha de nacimiento" value={dob} onChange={(e) => setDob(e.target.value)} /><br />
        <button onClick={login}>Ingresar</button>
      </main>
    );
  }

  return (
    <main style={{ textAlign: 'center', marginTop: '50px' }}>
      <img src="/logo.png" alt="ASEFH Logo" width={100} />
      <h1>ASEFH JUNIOR</h1>
      <p>Aportaciones: L. {aportaciones.toLocaleString()}</p>
      <p>Préstamo: L. {prestamo.toLocaleString()}</p>
      <p>✅ Menú, asistente y navegación se agregan después</p>
    </main>
  );
}