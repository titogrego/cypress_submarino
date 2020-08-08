/// <reference types="cypress" />
const el = require('./elements').ELEMENTS;

class Home {
 
realizarUmaPesquisa( termoPesquisa){

cy.get(el.campoPesquisa)
.should("be.visible")
.type(termoPesquisa)
.should("have.value",termoPesquisa)
.type('{enter}');


}

pesquisarPorCategoria(categoria,subcategoria1, subcategoria2){
    cy.get(el.menu).should("be.visible").click() ;
    cy.contains(categoria).click() ;
    cy.contains(subcategoria1).click();
    cy.contains(subcategoria2).click();
}




}
export default new Home();