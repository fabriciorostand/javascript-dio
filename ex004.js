/* Programa para calcular o valor que deve ser pago por um produto 

   Condição de pagamaneto:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto (precoProduto, desconto) {
    return precoProduto - (precoProduto * (desconto / 100));
}

function aplicarJuros (precoProduto, juros) {
    return precoProduto + (precoProduto * (juros / 100));
}

function calcularPrecoFinal (precoProduto, formaDePagamento) {
    if (formaDePagamento === 'Débito') { 
        console.log('Total a pagar: R$ ' + aplicarDesconto(precoProduto, 10));
    } else if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') { 
        console.log('Total a pagar: R$ ' + aplicarDesconto(precoProduto, 15));
    } else if (formaDePagamento === 'Parcelado em 2x') {
        console.log('Total a pagar: R$ ' + precoProduto);
    } else if (formaDePagamento === 'Acima de duas parcelas') {
        console.log('Total a pagar: R$ ' + aplicarJuros(precoProduto, 10));
    } else {
        console.log('Não trabalhamos com esta forma de pagamento');
    }
}

function main () {
    calcularPrecoFinal(100, 'Débito');
}

main();