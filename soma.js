function calcularsoma() {
  let indice = 13;
  let soma = 0;
  let k = 0;

  while (k < indice) {
      k = k + 1;
      soma = soma + k;
  }

  console.log("Valor de soma:", soma);
}

calcularsoma();