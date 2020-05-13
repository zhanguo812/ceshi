<template>
  <div id="zhifu">
    <van-nav-bar title="确认支付" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-cell title="实付金额" value="1155.0" />
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell
          title="支付宝支付（推荐）"
          clickable
          @click="radio = '1'"
          icon="http://u.candou.com/2017/0105/1483609976620.jpg"
        >
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell
          title="线下转账（确认支付后，请联系客服进行线下操作）"
          clickable
          @click="radio = '2'"
          icon="http://img4.imgtn.bdimg.com/it/u=1730153084,931402316&fm=26&gp=0.jpg"
        >
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="zhifu-btn">
      <van-button
        type="info"
        block
        custom-style="width:90%"
        style="height:2rem;line-height:2rem;"
      >确认支付</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      checked: false,
      radio: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
#zhifu {
  div {
    align-items: center;
    img {
      text-align: center;
      width: 2rem;
      width: 2rem;
    }
    span {
      font-size: 0.93rem;
      color: #000;
    }
  }
  .zhifu-btn {
    padding: 2rem 1rem;
    span {
      color: #fff;
    }
  }
}
</style>