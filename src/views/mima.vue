<template>
  <div id="mima">
    <van-nav-bar title="修改密码" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="mima-content">
      <div class="mima-content-img">
        <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="mima-content-input">
        <van-cell-group>
          <van-field placeholder="输入注册时的手机号" />
        </van-cell-group>
        <van-cell-group>
          <van-field placeholder="输入密码" error-message="*长度为6~20位" />
        </van-cell-group>
        <van-cell-group>
          <van-field placeholder="再次输入密码" />
        </van-cell-group>
        <van-cell-group>
          <van-field center clearable placeholder="输入验证码" use-button-slot>
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </div>
      <div class="mima-content-btn">
        <van-button
          round
          type="info"
          block
          custom-style="width:100%"
          style="height:2rem;line-height:2rem"
        >重置密码</van-button>
      </div>
    </div>
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
#mima {
  .mima-content {
    .mima-content-img {
      height: 9rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mima-content-input {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .mima-content-btn {
      height: 1rem;
      margin-top: 2rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }
}
</style>