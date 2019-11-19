<template>
  <q-page class="row reverse">
    <div class="col-auto bg-white" style="width: 100%;margin-top: 55px;padding: 0px 40px;">
      <!-- TOOLBAR -->
      <q-toolbar class="q-px-none" style="margin-top: -13px;">
        <q-toolbar-title class="games-toolbar">Games</q-toolbar-title>
        <q-select
          class="hide-sm"
          v-model="orderBy"
          :options="orderByOptions"
          emit-value
          map-options
          dense
          outlined
          style="width: 175px;"
        ></q-select>
      </q-toolbar>
      <q-select
        class="show-sm"
        v-model="orderBy"
        :options="orderByOptions"
        emit-value
        map-options
        dense
        outlined
        style="width: 100%;"
      ></q-select>

      <!-- CONTAINER DOS PRODUTOS -->
      <div class="product-container">
        <transition-group name="list" class="flex q-gutter-lg">
          <shop-item v-for="(product) in orderedProductList" :key="product.id" :item="product"></shop-item>
        </transition-group>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from "vuex";
import shopItem from "../components/shop-item";

export default {
  name: "PageIndex",

  data() {
    return {
      orderBy: "score",
      orderByOptions: [
        { value: "score", label: "Mais populares" },
        { value: "priceLow", label: "Menores preços" },
        { value: "priceHigh", label: "Maiores preços" },
        { value: "alphabetically", label: "Ordem alfabética" }
      ]
    };
  },

  computed: {
    ...mapState("gamesModule", ["products"]),

    orderedProductList: function() {
      // retorna uma cópia da lista original de produtos ordenada de acordo com a variável [orderBy]
      switch (this.orderBy) {
        case "score":
          return [...this.products].sort((x, y) =>
            x.score > y.score ? -1 : 1
          );
        case "priceLow":
          return [...this.products].sort((x, y) =>
            x.price < y.price ? -1 : 1
          );
        case "priceHigh":
          return [...this.products].sort((x, y) =>
            x.price > y.price ? -1 : 1
          );
        case "alphabetically":
          return [...this.products].sort((x, y) =>
            x.name.toUpperCase() < y.name.toUpperCase() ? -1 : 1
          );
      }
      // caso não haja um valor correto na variável [orderBy], retorna uma cópia da lista original
      return [...this.products];
    }
  },

  components: {
    "shop-item": shopItem
  },

  beforeMount() {
    // carrega a lista de produtos do JSON e envia para a store
    let json = require("../products.json");
    this.$store.dispatch("gamesModule/setList", { products: json });
  }
};
</script>

<style>
.games-toolbar {
  color: #363636;
  line-height: 65px;
  font-weight: 600;
  font-size: 48px;
}

.product-container {
  margin-top: 40px;
}

.list-move {
  transition: transform 1s;
}

.show-sm {
  display: none;
  margin-top: 8px;
}

@media only screen and (max-width: 600px) {
  .hide-sm {
    display: none;
  }

  .show-sm {
    display: block;
  }
}

@media only screen and (max-width: 1040px) {
  .hide-sm {
    margin-right: 80px;
  }
}

.q-field--outlined .q-field__control:before {
  border-color: #E1E1E1 !important;
}
</style>
