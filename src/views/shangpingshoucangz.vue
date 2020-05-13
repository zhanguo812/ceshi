<template>
  <div id="shangpingshoucangz">
    <img
      src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3167098987,2760803345&fm=15&gp=0.jpg"
      alt
    />
    <div class="shangpingshoucangz-content">
      <div>
        <span class="shangpingshoucangz-content-title">耐尔金MC018立式快速无线充电</span>
      </div>
      <div>
        <span class="shangpingshoucangz-content-title-shiprice">
          <s>市场价￥138.0</s>
        </span>
      </div>
      <div class="shangpingshoucangz-content-title-price">
        <span>￥128.0</span>
        <van-button
          round
          type="default"
          size="small"
          style="border:.01rem solid #0aa1ed;color:#0aa1ed;height:1.2rem;line-height:1.2rem"
        >企业专享</van-button>
      </div>
      <div class="shangpingshoucangz-content-btn">
        <van-button
          round
          type="default"
          size="small"
          style="border:.04rem solid #000;color:#000;height:1.7rem;line-height:1.7rem;margin-right:1rem"
        >取消收藏</van-button>
        <van-button
          round
          type="default"
          size="small"
          style="border:.04rem solid coral;color:coral;height:1.7rem;line-height:1.7rem"
        >立即购买</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#shangpingshoucangz {
  img {
    width: 6.8rem;
    height: 6.8rem;
  }
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  height: 6.8rem;
  .shangpingshoucangz-content {
    margin-left: 0.5rem;
    color: #000;
    flex-direction: column-reverse;
    position: relative;
    .shangpingshoucangz-content-title {
      font-size: 0.9rem;
      overflow: hidden;
    }
    div {
      padding-top: 0.15rem;
      padding-bottom: 0.1rem;
      .shangpingshoucangz-content-title-shiprice {
        font-size: 0.9rem;
      }
    }
    .shangpingshoucangz-content-title-price {
      color: coral;
      font-size: 0.9rem;
      display: inline-flex;
      align-items: center;
      span {
        padding-right: 0.5rem;
      }
    }
    .shangpingshoucangz-content-btn {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>