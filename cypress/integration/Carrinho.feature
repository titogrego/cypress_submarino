#language: pt
@DesafioZup @Carrinho
Funcionalidade: Carrinho
Como usuário, desejo adicionar um produto no carrinho
Para que seja possível realizar a compra

    Contexto:  
    Dado que eu esteja na tela home
    

   @automatizado
   Cenário: Adicionar um produto no carrinho
   Quando realizo uma pesquisa "Games"
   E seleciono um produto
   E adiciono o produto no carrinho
   Então devo visualizar carrinho corretamente
    
   @automatizado
   Cenário: Retirar produto do carrinho
   Quando realizo uma pesquisa "Shampoo"
   E seleciono um produto
   E adiciono o produto no carrinho
   E removo produto do  carrinho
   Então devo visualizar que o carrinho está vazio


     @automatizado
    Cenário: Alterar quantidade de produtos no Carrinho
    Quando realizo uma pesquisa "The Last Of Us 2"
    E seleciono um produto
    E adiciono o produto no carrinho
    E Altero a quantidade para "3" produtos
    Então devo validar a alteração do valor no resumo
