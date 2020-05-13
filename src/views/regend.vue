<template>
  <div id="regend">
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="regend-content">
      <van-image
        round
        width="6rem"
        height="6rem"
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037758556,623700135&fm=26&gp=0.jpg"
      />
      <div>恭喜您已成为《商采通》的企业用户，希望能给您提供满意的服务，您的满意是我们永恒不变的标准，祝您采购顺心！</div>
    </div>
    <div class="regend-btn">
      <div class="regend-btn-item">
        <van-button round type="info" block size="small" @click="routeryonghu">进入采购之旅</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    routeryonghu() {
      this.$router.push("/yonghu");
    }
  }
};
</script>
<style lang="scss" scoped>
#regend {
  .regend-content {
    padding: 4.5rem 2.8rem 0 2.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      text-indent: 2rem;
      margin-top: 2.1rem;
      color: #000;
      font-size: 0.92rem;
    }
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
      width: 75%;
      span {
        font-size: 0.93rem;
        font-weight: 300;
      }
    }
  }
}
</style>