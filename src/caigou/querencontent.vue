<template>
  <div class="querendingdan-content">
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      origin-price="市场价10.00"
    >
      <template #tags>
        <van-tag plain type="danger">规格</van-tag>
      </template>
    </van-card>
    <van-divider :style="{borderColor:'#000'}" />
    <div class="querendingdan-content-pie">
      <span>配送方式</span>
      <div class="querendingdan-content-pie-div_1" @click="show1=true">
        <span>普通物流</span>
        <van-icon name="arrow" size="1.3rem" />
      </div>
    </div>
    <van-divider :style="{borderColor:'#000'}" />
    <div class="querendingdan-content-pie">
      <span>发票信息</span>
      <div class="querendingdan-content-pie-div_1" @click="show2=true">
        <span>不开发票</span>
        <van-icon name="arrow" size="1.3rem" />
      </div>
    </div>
    <van-divider :style="{borderColor:'#000'}" />
    <div class="querendingdan-content-pie">
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="留言"
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
    </div>
    <van-divider :style="{borderColor:'#000'}" />
    <div style="text-align:right">共9件商品，运费￥0.0 小计￥441.0</div>
    <van-divider :style="{borderColor:'#000'}" />
    <van-popup v-model="show1" style="width:18rem;height:19rem" round>
      <div>
        <div style="text-align:center;margin-top:1rem;">物流信息</div>
        <van-divider :style="{borderColor:'#000'}" />
        <div style="text-align:center" @click="show1=false">普通物流</div>
        <van-divider :style="{borderColor:'#000'}" />
        <div style="text-align:center" @click="show1=false">快递</div>
        <van-divider :style="{borderColor:'#000'}" />
        <div style="text-align:center" @click="show1=false">自提</div>
      </div>
    </van-popup>
    <van-popup v-model="show2" style="width:18rem;height:19rem" round>
      <div>
        <div style="text-align:center;margin-top:1rem;">发票信息</div>
        <van-divider :style="{borderColor:'#000'}" />
        <div style="text-align:center" @click="show2=false">不开发票</div>
        <van-divider :style="{borderColor:'#000'}" />
        <div style="text-align:center" @click="show2=false">开发票</div>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      show1: false,
      show2: false
    };
  }
};
</script>
<style lang="scss">
.querendingdan-content {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  div {
    font-size: 0.89rem;
  }
  span {
    font-size: 0.9rem;
  }
  .querendingdan-content-pie {
    margin-top: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .querendingdan-content-pie-div_1 {
      display: flex;
      align-items: center;
      :first-child {
        font-size: 0.8rem;
      }
    }
  }
}
</style>