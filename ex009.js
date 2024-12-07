// Criando Instâncias com Constructor

class Pessoa {
    nome;
    cidade;
    idade;

    constructor(nome, cidade, idade) {
        this.nome = nome;
        this.cidade = cidade;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, moro em ${this.cidade} e tenho ${this.idade} anos`);
    }
}

const fabricio = new Pessoa('Fabricio Rostand', 'Brasília', 23);
const elena = new Pessoa('Elena Cordeiro', 'Brasília', 24);

// Funções recebendo Objetos

function compararPessoas (p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome + 'é mais velho(a) que' + p2.nome);
    } else if (p2.idade > p1.idade) {
        console.log(p2.nome + ' é mais velho(a) que ' + p1.nome)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }

}

fabricio.descrever();
compararPessoas(fabricio, elena);
