// Como criar Classes e Instâncias

class Pessoa {
    nome;
    cidade;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome}, moro em ${this.cidade} e tenho ${this.idade} anos`);
    }
}

const fabricio = new Pessoa();
fabricio.nome = 'Fabricio Rostand';
fabricio.cidade = 'Brasília'
fabricio.idade = 23;

const elena = new Pessoa();
elena.nome = 'Elena Cordeiro';
elena.cidade = 'Brasília'
elena.idade = 24;

fabricio.descrever();
