<template>
  <div id="shoucang">
    <van-nav-bar title="商品收藏" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <shangpingshoucangz></shangpingshoucangz>
    <shangpingshoucangz></shangpingshoucangz>
    <shangpingshoucangz></shangpingshoucangz>
  </div>
</template>
<script>
import shangpingshoucangz from "../views/shangpingshoucangz";
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: { shangpingshoucangz }
};
</script>
<style lang="scss" scoped>
</style>