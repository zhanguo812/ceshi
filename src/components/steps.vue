<template>
  <div>
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="reg-steps">
      <van-steps :active="active" active-icon="success" active-color="#38f">
        <van-step>输入手机号</van-step>
        <van-step>填写公司信息</van-step>
        <van-step>选择专属客服</van-step>
        <van-step>注册完成</van-step>
      </van-steps>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  props: ["active"]
};
</script>
<style lang="scss" scoped>
.reg-steps {
  padding: 1rem 1rem 0rem 1rem;
}
</style>