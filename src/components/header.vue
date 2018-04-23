<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%">
    </div>
    <transition name="fade">
      <detail v-show='detailShow' @on-close="hideDetail" :seller="seller"></detail>
    </transition>
  </div>
</template>

<script>
import detail from '@/components/detail'
export default {
  components: {
    detail
  },
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet">
  @import '../common/stylus/index.styl'
  .fade-enter-active, .fade-leave {
    transition: all .5s;
    opacity: 0.8
  }
  .fade-enter, .fade-leave-active{
    transition: all .5s;
    opacity: 0
  }
  .header{
  color: #fff;
    background-color: rgba(7,17,27,0.5);
  .content-wrapper{
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size:0;
    .avatar {
      display: inline-block;
      vertical-align : top;
      font-size: 14px;
      img{
        border-radius: 2px;
      }
    }
    .content{
      display: inline-block;
      margin-left: 16px;
      font-size: 14px;
      .title{
        margin: 2px 0 8px 0;
        .brand{
          display: inline-block;
          vertical-align : top;
          width: 30px;
          height: 18px;
          background: url("../assets/header/brand@3X.png") no-repeat;
          background-size: 30px 18px;
        }
        .name{
          margin-left: 6px;
          font-size : 16px;
          line-height : 18px;
          font-weight :bold;
        }
      }
      .description{
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }
      .supports{
        .icon{
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-repeat: no-repeat;
          &.decrease{
            background: url("../assets/header/decrease_1@3X.png");
            background-size: 12px 12px;
          }
          &.discount{
            background: url("../assets/header/discount_1@3X.png");
            background-size: 12px 12px;
          }
          &.guarantee{
            background: url("../assets/header/guarantee_1@3X.png");
            background-size: 12px 12px;
          }
          &.invoice{
            background: url("../assets/header/invoice_1@3X.png");
            background-size: 12px 12px;
          }
          &.special{
            background: url("../assets/header/special_1@3X.png");
            background-size: 12px 12px;
          }
        }
        .text{
          font-size: 10px;
          line-height: 12px;
        }
      }
    }
    .support-count{
       position: absolute;
       right: 12px;
       bottom: 18px;
       padding: 0 8px;
       height: 24px;
       line-height: 24px;
       border-radius: 14px;
       background: rgba(0,0,0,0.2);
       text-align: center;
       .count{
         font-size: 10px;
         vertical-align: top;
       }
      .icon-keyboard_arrow_right{
        margin-left: 2px;
        line-height: 24px;
        font-size: 10px;
      }
     }
  }
  .bulletin-wrapper{
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    background-color: rgba(7,17,28,0.2);
    .bulletin-title{
      display: inline-block;
      vertical-align: middle;
      width: 22px;
      height: 12px;
      bg-img('bulletin');
      background-size: 22px 12px;
    }
    .bulletin-text{
      font-size: 10px;
      margin: 0 4px;
    }
    .icon-keyboard_arrow_right{
      position: absolute;
      font-size: 10px;
      right: 12px;
      top: 8px;
    }
  }
  .background{
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
    width:100%;
    height: 125px;
    overflow: hidden;
    filter: blur(10px);
  }

}
</style>
