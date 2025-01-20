function calcularPercentual(data) {
  const total = Object.values(data).reduce((acc, value) => acc + value, 0);
  
  for (const estado in data) {
    const percentual = (data[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
}

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

calcularPercentual(faturamento);