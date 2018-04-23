<template>
  <div class="cart-control">
    <transition name="move">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count > 0" @click="decreasecart"></div>
    </transition>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addcart"></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object
    }
  },
  created () {
    // console.log(this.food)
  },
  methods: {
    addcart (event) {
      if (!event._constructed) {
        return 0
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('cart.add', event.target)
    },
    decreasecart (event) {
      if (!event._constructed) {
        return 0
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet">
  .move-enter-active,.move-leave{
    opcity 1
    transform translate3d(0,0,0)
    transition all 0.4s linear
  }
  &.move-enter,&.move-leave-active{
    opcity 0
    transform translate3d(24px,0,0)
    transition all 0.4s linear
  }
.cart-control{
  font-size 0
  .cart-decrease,.cart-add{
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0,160,220)
  }
  .cart-count{
    display inline-block
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147,153,159)
    vertical-align top
  }

}
</style>
