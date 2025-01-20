const fs = require('fs');

fs.readFile('faturamento.json', 'utf-8', (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo json:", err);
    return;
  }

  const faturamentoData = JSON.parse(data);

  function analisarFaturamento(json) {
    const validData = json.faturamento.filter(entry => entry.valor > 0);
    const valores = validData.map(entry => entry.valor);
    
    const total = valores.reduce((acc, cur) => acc + cur, 0);
    const media = total / valores.length;
    const min = Math.min(...valores);
    const max = Math.max(...valores);
    const acimaMedia = valores.filter(valor => valor > media).length;

    return {
      menorValor: min,
      maiorValor: max,
      media: media.toFixed(2),
      diasAcimaMedia: acimaMedia
    };
  }

  const resultados = analisarFaturamento(faturamentoData);
  console.log(resultados);
});
