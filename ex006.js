function mostrarNome (nome) { 
    console.log('Nome: ' + nome);
}

function verificarIdade (idade) {
    if (idade < 18) {
        console.log('Menor de idade');
    } else {
        console.log('Maior de idade');
    }
}

function main () {
    mostrarNome('Fabricio');
    verificarIdade(18);
}

main();