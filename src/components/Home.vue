<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item replace to icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/caigou" icon="records">采购单</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="manager-o">会员中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template> 
<script>
export default {
  methods: {
    login(i) {
      let id = this.$store.state.user.user_name;
      if (!id) {
        this.$router.push("/login");
      } else {
        this.$router.push(i);
      }
    }
  }
};
</script>
<style lang="scss">
</style>