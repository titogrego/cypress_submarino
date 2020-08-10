#language: pt
@DesafioZup @Pesquisa
Funcionalidade: Pesquisa
Como usuário, desejo realizar uma pesquisa
Para que seja possível visualizar a lista de produtos

    Contexto:  
    Dado que eu esteja na tela home

    @automatizado
    Cenário: Realizar uma pesquisa válida
    Quando realizo uma pesquisa "Games"
    Então devo visualizar buscas relacionadas
    E devo visualizar uma lista de produtos
    

    @automatizado
    Cenário: Realizar uma pesquisa inválida
    Quando realizo uma pesquisa "nyydrhfladlfrfi"
    Então devo visualizar mensagem de produto não encontrado


   # @automatizado @WIP
   # Cenário: Realizar uma pesquisa por categoria
   # Quando realizo uma pesquisa por categoria
   # Então devo visualizar a categoria corretamente
    
    