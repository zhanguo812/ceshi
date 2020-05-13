<template>
  <div id="kefusel">
    <steps active="2"></steps>
    <div class="kefusel-title">
      <div>为了能够给您提供更好的服务，请选择一名专属客户经理，他(她)将会为您竭诚服务</div>
    </div>
    <div class="kefusel-kefu" v-for="index in 6" :key="index">
      <van-radio-group v-model="radio">
        <van-radio :name="''+index" style="padding:0 1rem 0 1rem;">
          <kefu></kefu>
          <van-divider :style="{ color: '#333', borderColor: '#333', padding: '.3rem 0' }" />
        </van-radio>
      </van-radio-group>
    </div>
    <p style="height:2rem"></p>
    <div class="kefusel-btn">
      <div class="kefusel-btn-item">
        <van-button round type="info" block size="small" @click="routerregend">确认选择</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import steps from "../components/steps";
import kefu from "../views/kefu";
export default {
  data() {
    return {
      radio: "3"
    };
  },
  methods: {
    routerregend() {
      this.$router.push("/regend");
    }
  },
  components: { steps, kefu }
};
</script>
<style lang="scss" scoped>
#kefusel {
  .kefusel-title {
    padding: 0.1rem 2rem 0.1rem 2rem;
    div {
      font-size: 0.9rem;
      color: #001;
      text-indent: 2rem;
    }
  }
  .kefusel-btn {
    position: fixed;
    background-color: #fff;
    bottom: 0%;
    width: 100%;
    z-index: 999;
    display: flex;
    height: 4rem;
    justify-content: center;
    align-items: center;
    .kefusel-btn-item {
      width: 75%;
      span {
        color:#ffffff;
        font-size: .93rem;
        font-weight: 300;
      }
    }
  }
}
</style>