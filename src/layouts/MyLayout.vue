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

</style>