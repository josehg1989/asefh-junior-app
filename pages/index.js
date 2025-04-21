
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [dni, setDni] = useState('');
  const [dob, setDob] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [aportaciones, setAportaciones] = useState(null);
  const [prestamo, setPrestamo] = useState(null);

  const handleLogin = () => {
    if (dni === '0801199912345' && dob === '08/01/1999') {
      setAuthenticated(true);
      setAportaciones(15000);
      setPrestamo(6000);
    } else {
      alert('Datos incorrectos. Por favor verificá tu DNI y fecha de nacimiento.');
    }
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <Image src="/logo.jpg" width={100} height={100} alt="ASEFH Logo" />
      <h1>ASEFH JUNIOR</h1>
      {!authenticated ? (
        <>
          <input placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} />
          <input placeholder="Fecha de nacimiento" value={dob} onChange={(e) => setDob(e.target.value)} />
          <button onClick={handleLogin}>Ingresar</button>
        </>
      ) : (
        <>
          <p>Aportaciones: L. {aportaciones}</p>
          <p>Préstamo: L. {prestamo}</p>
        </>
      )}
    </div>
  );
}
