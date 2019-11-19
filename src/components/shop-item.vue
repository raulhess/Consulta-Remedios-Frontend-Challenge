<template>
  <div class="store-item" @mouseover="hovering = true" @mouseleave="hovering = false">
    <div class="image-container">
      <img :src="require(`assets/${item.image}`)" style="width: 180px;height: 180px;" />
    </div>

    <div class="flex flex-center" style="height: 64px;padding: 10px 0px;">
      <transition name="fade" mode="out-in">
      <template v-if="!hovering">
        <div key="not-hovering">
          <div class="item-caption">{{item.name}}</div>
          <div class="item-caption-strong">{{item.price}}</div>
        </div>
      </template>
      <div v-else key="hovering" class="item-caption-strong">adicionar ao carrinho</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {

  data(){
    return {
      hovering: false,
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {

  }

};
</script>
<style>
  .store-item {
    /* margin-right: 31px; */
    position: relative;
    min-width: 262px;
    width: auto;
    flex: 1000 1 0%;
    cursor: pointer;
  }

  .image-container {
    text-align: center;
    background: #EEEEEE;
    border-radius: 3px;
    padding: 10px 0px;
  }

  .item-caption {
    text-align: center;
    font-size: 16px;
    line-height: 22px;
    color: #746A6A;
  }

  .item-caption-strong {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #3486E6;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>