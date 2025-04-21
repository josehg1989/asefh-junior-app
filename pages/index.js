
import Image from 'next/image';

export default function Home() {
  const aportaciones = 15000;
  const prestamo = 6000;
  const dniCorrecto = "0801199912345";
  const fechaCorrecta = "08/01/1999";

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Image src="/logo.png" alt="ASEFH Logo" width={100} height={100} />
      <h1>ASEFH JUNIOR</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const dni = e.target.dni.value;
        const fecha = e.target.fecha.value;
        if (dni === dniCorrecto && fecha === fechaCorrecta) {
          document.getElementById('result').style.display = 'block';
        } else {
          alert('Datos incorrectos. Verificá tu DNI y fecha de nacimiento.');
        }
      }}>
        <input name="dni" placeholder="DNI" /><br/>
        <input name="fecha" placeholder="Fecha de nacimiento" /><br/>
        <button type="submit">Ingresar</button>
      </form>
      <div id="result" style={{ display: 'none', marginTop: '20px' }}>
        <p>Aportaciones: L. {aportaciones.toLocaleString()}</p>
        <p>Préstamo: L. {prestamo.toLocaleString()}</p>
        <p>✅ Menú, asistente y navegación se agregan después</p>
      </div>
    </div>
  );
}
