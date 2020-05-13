<template>
  <div id="dianpushoucang">
    <van-nav-bar title="店铺收藏" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <dianpushoucangz></dianpushoucangz>
    <dianpushoucangz></dianpushoucangz>
    <dianpushoucangz></dianpushoucangz>
  </div>
</template>
<script>
import dianpushoucangz from "../views/dianpushoucangz";
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: { dianpushoucangz }
};
</script>
<style lang="scss" scoped>
</style>