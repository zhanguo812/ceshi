<template>
  <div>
    <van-nav-bar title="退换/售后" left-arrow @click-left="onClickLeft"></van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
</style>