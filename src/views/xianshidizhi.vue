<template>
  <div id="xianshidizhi" v-if="address">
    <div>
      <p>
        <span>{{address.name}}</span>
        <span style="padding-left:2rem">{{address.tel}}</span>
      </p>
      <p>{{address.province}}-{{address.city}}-{{address.county}}-{{address.addressDetail}}</p>
    </div>
    <div style="text-align:right">
      <van-icon name="delete" size="1.5rem" />
      <van-icon name="edit" size="1.5rem" style="margin-left:2rem" @click="$router.push('/dizhi')" />
    </div>
    <van-divider :style="{borderColor:'#000'}" />
  </div>
</template>
<script>
export default {
  props: ["address"]
};
</script>
<style lang="scss" scoped>
#xianshidizhi {
  padding: 0.3rem 1rem 0 1rem;
}
</style>