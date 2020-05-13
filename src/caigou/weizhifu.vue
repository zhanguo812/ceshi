<template>
  <div id="未支付">
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      style="font-size:.91rem"
    >
      <template #tags>
        <van-tag plain type="danger">规格</van-tag>
      </template>
      <template #footer>
        <div style="margin:1rem 0">
          共计：
          <span>2</span>种商品
          <span>合计：</span>
          <span style="font-size:.93rem">441.0</span>
          <span>(含运费：￥0.0)</span>
        </div>
        <van-button size="small" style="font-size:.91rem">取消订单</van-button>
        <van-button size="small" style="font-size:.91rem">付款</van-button>
      </template>
    </van-card>
  </div>
</template>