const pessoa = {
    nome: 'Fabricio',
    idade: 23,
    cidade: 'Brasília',
    descrever: function () {
        console.log(`Meu nome é ${this.nome}, moro em ${this.cidade} e tenho ${this.idade} anos`);
    }
};


pessoa.descrever();
