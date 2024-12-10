const notas = [];

notas.push(5);
notas.push(7);
notas.push(6);

let soma = 0;

for (i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
} 

const media = soma / notas.length;

console.log(media);