
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <Head>
        <title>ASEFH JUNIOR</title>
      </Head>
      <img src="/logo.png" alt="ASEFH Logo" width="100" />
      <h1>ASEFH JUNIOR</h1>
      <p>Bienvenido al asistente de ASEFH.</p>
      <p>Aquí podrás consultar tus opciones y servicios disponibles.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>👉 Simular préstamo</li>
        <li>👉 Conocer productos ASEFH</li>
        <li>👉 Hablar con Samy Maldonado</li>
        <li>👉 Ver contactos de ASEFH</li>
      </ul>
    </div>
  );
}
