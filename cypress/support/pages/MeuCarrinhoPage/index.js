/// <reference types="cypress" />
const el = require('./elements').ELEMENTS;

class MeuCarrinho{
 

validarQuantidade(){
    cy.get(el.selectQuantidade).select("1").should("have.value","1");
}

alterarQuantidadeDeProdutos(quatidade){
    cy.get(el.totalPedido).then(res =>{
        let valor = res.text().split(" ")[1];
     
    Cypress.env("totalPedido", valor)        
    });
    cy.get(el.totalProduto).then(res =>{
    let texto = res[1];
    
    let valor = texto.innerText.split(" ")[1];
     
    Cypress.env("totalProduto", valor)        
    });
    cy.get(el.selectQuantidade).select(quatidade).should("have.value",quatidade)
    Cypress.env("quantidade", quatidade); 
}

validarTotalAposAlteracao(){
    let totalPedidoInicial = Cypress.env("totalPedido");
    let quantidade =Cypress.env("quantidade");
    let totalProdutoInicial = Cypress.env("totalProduto");
    cy.get(el.totalPedido).then(res =>{
        let totalFinal = res.text().split(" ")[1];
        expect(totalPedidoInicial).to.not.eq(totalFinal);
    });

    cy.get(el.totalProduto).then(res => {
        //pega o segundo elemento contendo o valor
        let totalFinal = res[1];
        //quebra o elemento para retirar o R$
        totalFinal = totalFinal.innerText.split(" ")[1];
        cy.log(totalFinal)
        //Calculo da quantidade * o valor inical do produto
        let produtoValidacao = totalProdutoInicial.replace(",",".") * quantidade;
        // validar se os valores são iguais
        expect(produtoValidacao.toString().replace(".",",")).to.be.eq(totalFinal)

    })
}

validarResumo(){
    cy.get(el.cardResumoPedido).scrollIntoView().should(element=>{
        expect(element.text()).to.contain('Resumo do pedido');
        expect(element.text()).to.contain('1 produto');
        expect(element.text()).to.contain('Frete');
        expect(element.text()).to.contain('Total');
    })
}

validarNomeProduto(){
    let nomeProduto = Cypress.env('nomeProduto');
    cy.get(el.nomeProduto).should("have.text",nomeProduto);
}

clicarRemover(){
    cy.contains("Remover").click({force:true})
}

validarCarrinhoVazio(){
    cy.xpath(el.textoCarrinhoVazio).should("have.text",'Seu carrinho está vazio')
    cy.xpath(el.links).first().should("have.text",'Voltar para página inicial')
    cy.xpath(el.links).last().should("have.text",'escolha outros produtos')
}

clicarBotaoComprar(){
    cy.get(el.btnComprar).scrollIntoView()
    .should("be.visible").click()
}

}
export default new MeuCarrinho();