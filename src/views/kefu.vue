<template>
  <div id="kefu">
    <div class="kefu-content">
      <img src="../assets/01.jpg" alt />
      <div class="kefu-content-item">
        <div class="kefu-content-fuwu kefu-content-title">专属客户经理-高花花</div>
        <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
        <div class="kefu-content-fuwu">服务理念</div>
        <div class="overflow">愿所有的幸运，都不期而遇；愿所有的美好</div>
        <div class="kefu-content-fuwu kefu-content-font">
          经验：3年
          <span>服务客户44人</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4.5
    };
  }
};
</script>
<style lang="scss">
#kefu {
  .kefu-content {
    display: flex;
    align-items: center;
    height: 8rem;
    background-color: #fff;
    margin-top: 0.3rem;
    img {
      height: 100%;
    }
    .kefu-content-item {
      margin-left: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 7.5rem;
      .overflow {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #0aa1ed;
        font-size: 0.9rem;
        width: 15rem;
      }
      .kefu-content-fuwu {
        font-weight: 600;
      }
      .kefu-content-title {
        font-size: 1.1rem;
      }
      .kefu-content-font {
        font-size: 0.9rem;
      }
    }
  }
}
</style>