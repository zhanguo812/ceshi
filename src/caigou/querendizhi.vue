<template>
  <div id="querendizhi">
    <div class="querendizhi-content">
      <div class="querendizhi-content-item">
        <div class="querendizhi-content-item-div_1">
          <span>收货人:</span>
          <span>电话:</span>
        </div>
        <div class="querendizhi-content-item-div_2">
          <van-icon name="location-o" />
          <span></span>
          <!-- 地址 -->
        </div>
      </div>
      <div @click="$router.push('/seldizi')">
        <van-icon name="arrow" />
      </div>
    </div>
    <van-divider :style="{borderColor:'#000'}" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#querendizhi {
  margin-top: -0.2rem;
  z-index: 999;
  background-color: #fff;
  .querendizhi-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .querendizhi-content-item {
      padding: 0.2rem 0 0 0;
      font-size: 0.93rem;
      color: #000;
      .querendizhi-content-item-div_1 {
        display: inline-flex;
        width: 15rem;
        justify-content: space-around;
        padding: 0.5rem 0;
      }
      .querendizhi-content-item-div_2 {
        :first-child {
          margin-right: 0.5rem;
        }
      }
    }
    margin: 0 0.93rem;
  }
}
</style>