<template>
  <q-layout view="lHh Lpr lFf">

    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      :width="333"
    >

      <div class="cart-menu">

        <div class="cart-menu-title">
          Carrinho
          <span class="cart-menu-subtitle">{{(cartItemsAmount > 0) ? `(${cartItemsAmount} ${cartItemsAmount == 1 ? 'item' : 'itens'})` : ''}}</span>
        </div>

        <div v-if="cartItemsAmount === 0" class="text-center">
          <img class="cart-image" src="../assets/cart-icon.svg">
          <div class="cart-empty-text">Até o momento,<br/> o seu carrinho está vazio</div>
        </div>
        <div v-else>
          <q-list>
            <q-item v-for="item in cart" :key="item.id" class="q-px-none cart-item" clickable @click="$store.dispatch('gamesModule/removeItemCart',{id:item.id})">
              <q-item-section side>
                <div style="width: 60px;border-radius: 3px; background: #EEEEEE; text-align: center; padding: 6px 0px;">
                  <q-avatar rounded>
                    <img :src="require(`assets/${item.image}`)" />
                  </q-avatar>
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label class="cart-item-label">{{item.name}}</q-item-label>
                <q-item-label class="cart-item-price">{{toCurrency('BRL',item.price)}}</q-item-label>
                <q-item-label class="cart-item-label">Qtd: {{item.amount}}</q-item-label>
                <q-item-label></q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list>
            <q-item>
              <q-item-section side class="cart-item-label">
                subtotal
              </q-item-section>
              <q-space />
              <q-item-section side class="cart-item-price-shipping">
                {{toCurrency('BRL',subTotal)}}
              </q-item-section>
            </q-item>

            
            <q-item>
              <q-item-section side class="cart-item-label">
                frete
              </q-item-section>
              <q-space />
              <q-item-section side class="cart-item-price-shipping">
                {{toCurrency('BRL',shipping)}}
              </q-item-section>
            </q-item>

            
            <q-item>
              <q-item-section side class="cart-item-label">
                total
              </q-item-section>
              <q-space />
              <q-item-section side class="cart-item-price-shipping big">
                {{toCurrency('BRL',total)}}
              </q-item-section>
            </q-item>
          </q-list>
        </div>

      </div>

    </q-drawer>

    <div class="show-lg">
      <q-btn @click="leftDrawerOpen = !leftDrawerOpen" icon="mdi-cart-outline" flat color="blue-4" style="border: solid 1px #E1E1E1; height: 40px;"></q-btn>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: true
    }
  },

  computed: {

    ...mapState("gamesModule", ["cart"]),

    ...mapGetters("gamesModule", ["subTotal","shipping","total","cartItemsAmount"]),

  },

  beforeMount() {
    this.leftDrawerOpen = (window.innerWidth <= 1040) ? false : true
  }

}
</script>

<style scoped>

  .cart-menu {
    margin-top: 55px;
    margin-right: 71px;
    border: solid 1px #E1E1E1;
    border-radius: 3px;
    width: 262px;
    padding: 12px;
    min-height: 325px;
  }

  .cart-menu-title {
    color: #363636;
    font-size: 18px;
    line-height: 24px;
    font-weight: bold;
  }

  .cart-menu-subtitle {
    color: #7F7575;
    font-size: 14px;
    line-height: 19px;
    font-weight: normal;
  }

  .cart-image {
    padding: 18px 0px;
    width: 90px;
    margin: 0px auto;
    margin-top: 35px;
  }

  .cart-empty-text {
    color: #746A6A;
    font-size: 14px;
    line-height: 19px;
  }

  .cart-item-label {
    color: #7F7575;
    font-size: 14px;
    line-height: 19px;
  }

  .cart-item-price {
    color: #423B3B;
    font-size: 14px;
    line-height: 19px;
    font-weight: bold;
  }

  .cart-item-price-shipping {
    color: #423B3B;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
  }

  .cart-item:hover:after {
    position: absolute;
    background: #54A3FF;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 14px;
    font-weight: 600;
    font-size: 12px;
    color: white;
    right: 12px;
    content: "x";
  }

  .big{
    font-size: 20px;
    line-height: 27px;
  }

  .show-lg {
    display: none;
    position: absolute;
    right: 40px;
    margin-top: 55px;
    height: 40px;
    z-index: 100;
  }

  @media only screen and (max-width: 600px){
    .show-lg {
        display: block;
    }
  }

  @media only screen and (max-width: 1040px){
    .cart-menu {
      border: none;
      width: 100%;
    }

    .show-lg {
        display: block;
    }
  }

</style>