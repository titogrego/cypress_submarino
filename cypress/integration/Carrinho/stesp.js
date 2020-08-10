import Produto from '../../support/pages/ProdutoPage';
import MeuCarrinho from '../../support/pages/MeuCarrinhoPage'


When(/^adiciono o produto no carrinho$/, () => {
    
    Produto.validarNomeProduto();
    Produto.preencherOCep("30626380");
    Produto.clicarNoBotaoComprar();
    
});


When(/^removo produto do  carrinho$/, () => {
    MeuCarrinho.clicarRemover()
    
});

Then(/^devo visualizar carrinho corretamente$/, () => {
    MeuCarrinho.validarNomeProduto();
    cy.contains("Meu carrinho").should("exist");
    MeuCarrinho.validarQuantidade();
    MeuCarrinho.validarResumo()

});


Then(/^devo visualizar que o carrinho está vazio$/, () => {
	MeuCarrinho.validarCarrinhoVazio()
});



When(/^Altero a quantidade para "([^"]*)" produtos$/, (quantidade) => {
	MeuCarrinho.alterarQuantidadeDeProdutos(quantidade)
});


Then(/^devo validar a alteração do valor no resumo$/, () => {
	MeuCarrinho.validarTotalAposAlteracao();
});


