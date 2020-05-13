<template>
  <div id="liulanjiluz">
    <img
      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1784373801,1922954810&fm=26&gp=0.jpg"
      alt
    />
    <div class="liulanjiluz-content">
      <div>
        <span class="liulanjiluz-content-title">耐尔金MC018立式快速无线充电</span>
      </div>
      <div>
        <div>
          <span class="liulanjiluz-content-title-shiprice">
            <s>市场价￥138.0</s>
          </span>
        </div>
        <div class="liulanjiluz-content-title-price">
          <span>￥128.0</span>
          <van-button
            round
            type="default"
            size="small"
            style="border:.01rem solid #0aa1ed;color:#0aa1ed;height:1.2rem;line-height:1.2rem"
          >企业专享</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#liulanjiluz {
  img {
    width: 6.8rem;
    height: 6.8rem;
  }
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  height: 6.8rem;
  .liulanjiluz-content {
    margin-left: 0.5rem;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .liulanjiluz-content-title {
      font-size: 0.9rem;
      overflow: hidden;
    }
    div {
      div {
        padding-top: 0.15rem;
        padding-bottom: 0.1rem;
        .liulanjiluz-content-title-shiprice {
          font-size: 0.9rem;
        }
      }
      .liulanjiluz-content-title-price {
        color: coral;
        font-size: 0.9rem;
        display: inline-flex;
        align-items: center;
        span {
          padding-right: 0.5rem;
        }
      }
    }
  }
}
</style>