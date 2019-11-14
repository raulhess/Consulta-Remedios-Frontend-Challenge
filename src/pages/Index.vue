<template>
  <q-page class="row reverse">
    <div class="col-auto" style="width: 848px;margin-top: 55px;">
      <q-toolbar style="margin-top: -13px;">
        <q-toolbar-title  class="games-toolbar">Games</q-toolbar-title>
        <q-select v-model="orderBy" :options="orderByOptions" emit-value map-options dense outlined></q-select>
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
export default {

  name: 'PageIndex',

  data() {
    return {
      orderBy: 'score',
      orderByOptions: [
        {value:'score',label:'Mais populares'}
      ]
    }
  }

}
</script>

<style>

  .games-toolbar {
    color: #363636;
    height: 65px;
    font-weight: 600;
    font-size: 48px;
  }
  
</style>
