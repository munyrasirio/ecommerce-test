# E-commerce Test

O desafio a seguir consiste em aplicar um conjunto de técnicas e lógicas ao fluxo de compra em um _e-commerce_ dividido em duas telas.
Algumas regras de negócio deveriam ser seguidas e estão descritas no decorrer deste documento.

Dentre as regras opcionais, foram aplicadas:

- Paginação na lista de produtos;
- Utilizar algum framework/lib como ReactJS ou Angular.

Não foram aplicadas:

- Exibir uma lista dos produtos do carrinho ao passar o mouse por cima do ícone de
  carrinho;
- Após o primeiro produto ser adicionado ao carrinho, inicia-se um contador
  decrescente de 15 minutos, que quando chegar a zero, limpará todos os itens do
  carrinho;
- Utilizar algum pré-processador de CSS ou CSS-in-JS;
- PWA (manifest, service-workers, offline-first, etc...).

Para a estruturação do _front-end_, foi utilizada a biblioteca _React.JS_, em conjunto com _React Redux_ para o controle dos estados.

No desenvovimento das interfaces, optou-se por utilizar um _framework_ chamado Grommet por sua fácil aplicação, _design_ minimalista e estrutura baseada em componentes _React_.

No _backend_, optou-se por simular o servidor com _json-server_ em conjunto com uma base de dados armazenada em um arquivo _.json_.
As chamadas dos _endpoints_ foram feitas com Axios.

## Como começar

Após clonar o projeto, realizar a instalação das dependências por meio do NPM .

```sh
npm install
```

Finalizada a instalação, primeiro deve-se executar o "servidor" criado com o _json-server_:

```sh
node server.js
```

O servidor retornará com a mensagem:

```sh
Json Server is Up & Running at port 3001
```

É importante que o servidor esteja em uma porta diferente de 3000 porque esta é reservada ao _React.JS_.
Agora é hora de fazer funcionar!

```sh
npm start
```

Assim que terminar de compilar a aplicação, a primeira tela que o projeto vai apresentar é a "Lista de Produtos".

## Lista de Produtos

A tela se divide em três sessões:

- _Header_;
- Filtro de categorias contido em um _select_;
- Lista de produtos;
- Paginação.

### Header

Apresenta o logotipo da loja fictícia e um _link_ contido no ícone de carrinho que redireciona para a tela de _checkout_. O ícone também apresentar um _counter_ que mostra quantos produtos foram adicionados ao carrinho.

### Filtro

É um select simples com as categorias de produtos.

### Lista de produtos

Os produtos foram organizados em _cards_ e além de trazer as informações sobre eles, apresenta um botão que adiciona o produto ao carrinho.

### Paginação

Paginação dos produtos, usando em conjunto os _hooks_ do _React.JS_ e as _queries_ fornecidas pelo _json-server_.
A paginação também se atualiza conforme é feita a troca das categorias, por meio de um filter existente no _json-server_.

## Carrinho (checkout)

O carrinho possui diversos comportamentos contidos nele que são apresentados de acordo com a situação da "compra".
Caso o cliente, faça o acesso com nenhum produto selecionado, será recebido com um aviso e um botão para redirecionamento para a tela anterior.
Outras regras da tela:

- Ao zerar a quantidade de um produto, por meio do botão para decrementar, este será removido da lista e decrementado do ícone no _header_;
- A quantidade de um produto pode ser incrementada infinitamente. No _.json_ de armazenamento dos dados não existe um valor para a quantidade em estoque;
- Após remover o último produto do carrinho, o cliente receberá um _modal_ com um aviso e um botão para confirmar o redirecionamento para a primeira tela;
- Ao "finalizar" a compra, surge também um _modal_ informando o cliente que a compra foi concluída. Ao clicar na confirmação, além de redirecionar o cliente, o estado do carrinho é limpo.