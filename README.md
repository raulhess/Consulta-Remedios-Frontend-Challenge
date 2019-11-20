# Consulta Remédios Front End Challenge

Segue uma breve documentação sobre o teste de frontend para a Consulta Remédios.

## Tecnologias Utilizadas
**Framework:** Quasar (Vue, vuex, webpack)
Para desenvolver este teste de frontend utilizei o framework [Quasar](https://quasar.dev/). Ele basicamente cria um projeto base de VueJS, utilizando Webpack para sua configuração e oferece alguns componentes prontos para Vue, todos criados utilizando as *guidelines* do material design.
### Componentes do Quasar Utilizados
 - [Avatar](https://quasar.dev/vue-components/avatar)
 - [Flexbox](https://quasar.dev/layout/grid/introduction-to-flexbox)
 - [Layout](https://quasar.dev/layout/layout)
 - [Lista e Itens](https://quasar.dev/vue-components/list-and-list-items)
 - [Select](https://quasar.dev/vue-components/select)
 - [Toolbar](https://quasar.dev/vue-components/toolbar)

## Componentes do Projeto
Segue uma lista com os principais componentes do projeto base.

 - [/src/layouts/MyLayout.vue](https://github.com/raulhess/Consulta-Remedios-Frontend-Challenge/blob/master/src/layouts/MyLayout.vue)
   - Arquivo com o layout do site. Nele está a parte que exibe o carrinho com os seus itens e ações. Este menu é do tipo [drawer](https://quasar.dev/layout/drawer).
- [/src/pages/Index.vue](https://github.com/raulhess/Consulta-Remedios-Frontend-Challenge/blob/master/src/pages/Index.vue)
  - Página principal. Está localizada a [toolbar](https://quasar.dev/vue-components/toolbar) e o [select](https://quasar.dev/vue-components/select). Dentro dessa página é renderizado dinamicamente a lista de produtos, que é um componente separado. Vale notar que coloquei o carregamento da lista de produtos na store dentro do vue hook *beforeMount*, simulando um projeto onde a lista de produtos seria carregada dinamicamente, provavelmente através de uma API.
- [/src/components/shop-item.vue](https://github.com/raulhess/Consulta-Remedios-Frontend-Challenge/blob/master/src/components/shop-item.vue)
  - Componente que renderiza um item específico e ao clicar adiciona ao carrinho.
- [/src/boot/currency.js](https://github.com/raulhess/Consulta-Remedios-Frontend-Challenge/blob/master/src/boot/currency.js)
  - Arquivo onde inseri um método global, através de um [mixin](https://vuejs.org/v2/guide/mixins.html), para formatar valores de moeda.
- [/src/store/games-module](https://github.com/raulhess/Consulta-Remedios-Frontend-Challenge/tree/master/src/store/games-module)
  - Pasta com um módulo de Vuex para gerenciamento de estado da aplicação. No caso deste teste, ele possui uma lista de produtos e uma lista do carrinho.

## Responsividade

Para a parte de responsividade utilizei 2 breakpoints: 600px e 1040px.

 - Acima de 1040px de largura de tela: mostra da maneira como foi especificada no teste
 - Entre 1040px e 600px: esconde o menu do carrinho, que fica acessível através de um botão
 - Abaixo de 600px: o botão de select pula para uma linha abaixo do botão do carrinho e do título, para não esconder o título.
 
## Guia de Instalação

Para fazer este projeto funcionar, basta instalar as dependências dele após o download:

```bash

npm install

```

 Depois utilizar o comando a seguir para rodar localmente:

```bash

quasar dev

```

 Ou caso queira gerar uma versão para deploy:

```bash

quasar build

```