function calcular() {
  const cp = document.getElementById('cp').value;
  const v = document.getElementById('v').value;
  const a = document.getElementById('a').value;

  const resultado = 0.5 * cp * Math.pow(v, 2) * a;

  const grafica = document.getElementById('grafica');
  grafica.innerHTML = `<p>Resultado: <span style="color: blue;">${resultado}</span></p>`;
}

function restablecer() {
  document.getElementById('cp').value = '';
  document.getElementById('v').value = '';
  document.getElementById('a').value = '';
  document.getElementById('grafica').innerHTML = '';
}
