/* Programa para calcular o valor que deve ser pago por um produto 

   Condição de pagamaneto:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto = 100.00;
const formaDePagamento = 'Débito';

if (formaDePagamento === 'Débito') {
    const precoFinalProduto = precoProduto - (precoProduto * 0.10); 
    console.log('Total a pagar: R$ ' + precoFinalProduto);
} else if (formaDePagamento === 'Dinheiro' || formaDePagamento === 'Pix') {
    const precoFinalProduto = precoProduto - (precoProduto * 0.15); 
    console.log('Total a pagar: R$ ' + precoFinalProduto);
} else if (formaDePagamento === 'Parcelado em 2x') {
    console.log('Total a pagar: R$ ' + precoProduto);
} else if (formaDePagamento === 'Acima de duas parcelas') {
    const precoFinalProduto = precoProduto + (precoProduto * 0.10);
    console.log('Total a pagar: R$ ' + precoFinalProduto)
} else {
    console.log('Não trabalhamos com esta forma de pagamento')
}
