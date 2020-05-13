<template>
  <div id="querendingdan">
    <div class="querendingdan-title">
      <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft"></van-nav-bar>
      <querendizhi></querendizhi>
    </div>
    <div style="margin-bottom: 8.2rem;"></div>
    <div>
      <querencontent></querencontent>
      <querencontent></querencontent>
      <querencontent></querencontent>
    </div>
    <div class="querendingdan-price">
      <div>
        <span>商品总价</span>
        <span>优惠</span>
        <span>运费</span>
      </div>
      <div>
        <span>1155.0</span>
        <span>0.0</span>
        <span>0.0</span>
      </div>
    </div>
    <div style="margin-bottom: 4.5rem;text-align:right; background-color:#eff;">
      <span>
        实付金额：
        <span style="margin:0 0.5rem">000.00</span>
      </span>
    </div>
    <div class="regend-btn">
      <div class="regend-btn-item">
        <van-button type="info" block size="small" @click="$router.push('/zhifu')">提交订单</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import querencontent from "./querencontent";
import querendizhi from "./querendizhi";
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: { querendizhi, querencontent }
};
</script>
<style lang="scss" scoped>
#querendingdan {
  .querendingdan-title {
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
  }
  .regend-btn {
    position: fixed;
    background-color: #fff;
    bottom: 0%;
    width: 100%;
    z-index: 999;
    display: flex;
    height: 4rem;
    justify-content: center;
    align-items: center;
    .regend-btn-item {
      width: 90%;
      span {
        font-size: 0.93rem;
        font-weight: 300;
      }
    }
  }
  .querendingdan-price {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    :first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 5rem;
    }
    :last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 5rem;
    }
  }
}
</style>