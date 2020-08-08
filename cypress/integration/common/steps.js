const faker = require('faker')
faker.locale = "pt_BR";
import Home from '../../support/pages/HomePage';
import Busca from '../../support/pages/BuscaPage';
Given(/^que eu esteja na tela home$/, () => {
	cy.visit('/');
	cy.url().should("have.string","submarino")
});

When(/^realizo uma pesquisa "([^"]*)"$/, (pesquisa) => {
	Home.realizarUmaPesquisa(pesquisa)
});

When(/^seleciono um produto$/, () => {
	Busca.clicarPrimeiroProdutoDaLista()
});

