function simularPrestamo() {
  document.getElementById('simulador').style.display = 'block';
}

function calcularPrestamo() {
  const monto = parseFloat(document.getElementById('monto').value);
  const aportes = parseFloat(document.getElementById('aportes').value);
  const cuotasBomba = parseInt(document.getElementById('cuotasBomba').value);
  const valorBomba = parseFloat(document.getElementById('valorBomba').value);

  if (isNaN(monto) || isNaN(aportes)) {
    alert("Por favor, completa los campos requeridos.");
    return;
  }

  let tasa = 0;
  if (monto <= aportes) tasa = 0.01;
  else if (monto <= aportes * 2) tasa = 0.015;
  else if (monto <= aportes * 3) tasa = 0.02;
  else {
    document.getElementById('resultado').innerText = "Monto excede el límite permitido (3x aportaciones)";
    return;
  }

  const totalBomba = cuotasBomba * valorBomba;
  const nuevoSaldo = monto - totalBomba;
  const plazo = 60;
  const interesTotal = nuevoSaldo * tasa * plazo;
  const totalPagar = nuevoSaldo + interesTotal;
  const cuotaMensual = totalPagar / plazo;

  document.getElementById('resultado').innerText =
    "Monto neto: L. " + nuevoSaldo.toFixed(2) + 
    "\nIntereses: L. " + interesTotal.toFixed(2) +
    "\nTotal a pagar: L. " + totalPagar.toFixed(2) +
    "\nCuota mensual: L. " + cuotaMensual.toFixed(2);
}