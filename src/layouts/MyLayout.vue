<template>
  <q-layout view="lHh Lpr lFf">

    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      :width="333"
    >

      <div class="cart-menu">
        
      </div>

    </q-drawer>

    <div class="show-lg">
      <q-btn @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" flat color="blue-4" style="border: solid 1px #E1E1E1; height: 40px;"></q-btn>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: true
    }
  },

  beforeMount() {
    this.leftDrawerOpen = (window.innerWidth <= 1040) ? false : true
  }
}
</script>

<style scoped>

  .cart-menu{
    margin-top: 55px;
    margin-right: 71px;
    border: solid 1px #E1E1E1;
    border-radius: 3px;
    width: 262px;
    padding: 12px;
  }

  .show-lg{
    display: none;
    position: absolute;
    right: 40px;
    margin-top: 55px;
    height: 40px;
    z-index: 100;
  }

  @media only screen and (max-width: 600px){
    .show-lg{
        display: block;
    }
  }

  @media only screen and (max-width: 1040px){
    .cart-menu {
      border: none;
    }

    .show-lg{
        display: block;
    }
  }

</style>