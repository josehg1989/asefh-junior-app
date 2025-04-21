import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ASEFH JUNIOR</title>
      </Head>
      <main>
        <h1>👷‍♂️ ASEFH JUNIOR</h1>
        <p>Bienvenido a tu asistente virtual de ASEFH.</p>
        <ul>
          <li>📊 Consultar mis saldos</li>
          <li>💰 Simular un préstamo</li>
          <li>📄 Solicitar ingreso o retiro</li>
          <li>🏠 Acerca de ASEFH</li>
        </ul>
      </main>
    </div>
  );
}
