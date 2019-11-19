<template>
  <q-page class="row reverse">
    <div class="col-auto bg-grey-2" style="width: 100%;max-width: 848px;margin-top: 55px;">

      <!-- TOOLBAR -->
      <q-toolbar style="margin-top: -13px;">
        <q-toolbar-title  class="games-toolbar" >Games</q-toolbar-title>
        <q-select v-model="orderBy" :options="orderByOptions" emit-value map-options dense outlined style="width: 175px;"></q-select>
      </q-toolbar>

      <!-- CONTAINER DOS PRODUTOS -->
      <div id="product-container">
        
      </div>

    </div>
  </q-page>
</template>

<script>
import {mapState} from 'vuex'

export default {

  name: 'PageIndex',

  data() {
    return {
      orderBy: 'score',
      orderByOptions: [
        {value:'score',label:'Mais populares'},
        {value:'priceLow',label:'Menores preços'},
        {value:'priceHigh',label:'Maiores preços'},
        {value:'alphabetically',label:'Ordem alfabética'}
      ]
    }
  },

  computed: {
    ...mapState('gamesModule',['products']),

    orderedProductList: function () {
      // retorna uma cópia da lista original de produtos ordenada de acordo com a variável [orderBy]
      switch(this.orderBy){
        case 'score':
          return [...this.products].sort((x,y) => (x.score > y.score) ? -1 : 1)
        case 'priceLow':
          return [...this.products].sort((x,y) => (x.price < y.price) ? -1 : 1)
        case 'priceHigh':
          return [...this.products].sort((x,y) => (x.price > y.price) ? -1 : 1)
        case 'alphabetically':
          return [...this.products].sort((x,y) => (x.name.toUpperCase() < y.name.toUpperCase()) ? -1 : 1)
      }
      // caso não haja um valor correto na variável [orderBy], retorna uma cópia da lista original
      return [...this.products]
    },
  },

  beforeMount() {
    // carrega a lista de produtos do JSON e envia para a store
    let json = require('../products.json')
    this.$store.dispatch('gamesModule/setList',{products:json})
  }

}
</script>

<style>

  .games-toolbar {
    color: #363636;
    line-height: 65px;
    font-weight: 600;
    font-size: 48px;
  }
  
</style>
