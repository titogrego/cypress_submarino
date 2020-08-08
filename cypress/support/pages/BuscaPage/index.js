/// <reference types="cypress" />
const el = require('./elements').ELEMENTS;

class Busca {
 
validarBuscarRelacionada( ){

cy.get(el.textoBusca).should("be.visible").should("contain.text","Buscas relacionadas");
cy.get(el.listaBuscasRelacionadas).should("have.length.greaterThan",0);

}

validarListaProdutos(){
    cy.get(el.listaProdutos).should("have.length.greaterThan",0);
}

clicarPrimeiroProdutoDaLista(){
    cy.get(el.listaProdutos)
    .first()
    .scrollIntoView()
    .should("be.visible")
    .click()
}

}
export default new Busca();