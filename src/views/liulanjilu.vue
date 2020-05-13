<template>
  <div id="liulanjilu">
    <van-nav-bar title="浏览记录" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <liulanjiluz></liulanjiluz>
    <liulanjiluz></liulanjiluz>
  </div>
</template>
<script>
import liulanjiluz from "../views/liulanjiluz";
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: { liulanjiluz }
};
</script>
<style lang="scss" scoped>
</style>