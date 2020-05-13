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
      <div class="shangpingshoucangz-content-spte">MC029</div>
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
        <van-stepper v-model="value" @plus="add" @minus="sub" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    };
  },
  watch: {
    value() {}
  },
  methods: {
    add() {
      this.$store.commit("add", "+");
    },
    sub() {
      this.$store.commit("add", "-");
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
#shangpingshoucangz {
  img {
    width: 4.8rem;
    height: 4.8rem;
  }
  padding: 0.5rem 0 0.2rem 0;
  display: flex;
  height: 4.8rem;
  .shangpingshoucangz-content-spte {
    font-size: 0.8rem;
    color: gray;
  }
  .shangpingshoucangz-content {
    margin-left: 0.5rem;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    .shangpingshoucangz-content-title {
      font-size: 0.9rem;
      overflow: hidden;
    }
    div {
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
        padding-right: 0.1rem;
      }
    }
    .shangpingshoucangz-content-btn {
      position: absolute;
      bottom: 0;
      right: -1.12rem;
    }
  }
}
</style>