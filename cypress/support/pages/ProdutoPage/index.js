/// <reference types="cypress" />
const el = require('./elements').ELEMENTS;

class Produto {
 

validarNomeProduto(){
    cy.get(el.nomeProduto).then(el =>{
       // expect(el.text()).not.have.text('')
        Cypress.env('nomeProduto',el.text());
    })
}

preencherOCep(cep ){

cy.get(el.campoCep).scrollIntoView().should("be.visible")
.type(cep,{force: true}).should("not.have.value", '');

cy.get(el.btnOk).scrollIntoView().should("be.enabled").click({force: true});
cy.contains("Entrega").should("be.visible")
cy.contains("Frete").should("be.visible")

}

clicarNoBotaoComprar(){
    cy.get(el.btnComprar).scrollIntoView().should("be.visible").click({force:true});
     
}


}
export default new Produto();