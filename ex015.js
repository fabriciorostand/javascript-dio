// Programa que percorre uma lista de números e imprime cada número par encontrado

const listaNumeros = [1, 2, 5, 8, 10, 15];

for (i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 === 0) {
        console.log(listaNumeros[i]);
    }
}