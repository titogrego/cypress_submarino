const faker = require('faker')
faker.locale = "pt_BR";
import Home from '../../support/pages/HomePage'
import Busca from '../../support/pages/BuscaPage';

Then(/^devo visualizar buscas relacionadas$/, () => {
	Busca.validarBuscarRelacionada();
});

Then(/^devo visualizar uma lista de produtos$/, () => {
	Busca.validarListaProdutos();
});


Then(/^devo visualizar mensagem de produto não encontrado$/, () => {
	cy.contains("Não encontramos nenhum resultado na sua busca.").should("be.visible")
});


When(/^realizo uma pesquisa por categoria$/, () => {
	Home.pesquisarPorCategoria("Moda","Feminino","Lingerie");
});

Then(/^devo visualizar a categoria corretamente$/, () => {
	cy.contains("Lingerie").should("exist");
	Busca.validarListaProdutos();
});



