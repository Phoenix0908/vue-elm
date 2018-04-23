<template>
  <div id="app">
    <vHeader :seller="seller"></vHeader>
    <ul class="tab border-1px">
      <router-link :to="{name:'Goods'}" tag="li" active-class="active" class="tab-item">商品</router-link>
      <router-link :to="{name:'Ratings'}" tag="li" active-class="active" class="tab-item">评论</router-link>
      <router-link :to="{name:'Sellers'}" tag="li" active-class="active" class="tab-item">商家</router-link>
    </ul>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import vHeader from '@/components/header'
export default {
  components: {
    vHeader
  },
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === 0) {
        this.seller = response.data
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet">
  @import "./common/stylus/mixin.styl"
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  /*border-bottom 1px solid #c1c1c1;*/
  border-1px(#c1c1c1);
  .tab-item{
    flex: 1;
    text-align center;
    display: block;
    font-size 14px;
    color: rgb(77,85,93);
    &.active{
      color: rgb(240,20,20);
    }
  }
}
</style>
