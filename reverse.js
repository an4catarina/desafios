function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }
  console.log("String invertida:", reversed.toLocaleLowerCase());
}

const inputString = "eu amo manga!";
reverseString(inputString);