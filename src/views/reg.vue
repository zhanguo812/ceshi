<template>
  <div id="reg">
    <steps :active="active"></steps>
    <div class="reg-input">
      <van-cell-group :border="false">
        <van-field placeholder="输入手机号" />
      </van-cell-group>
      <van-cell-group>
        <van-field placeholder="输入密码" error-message="*长度为6~20位" />
      </van-cell-group>
      <van-cell-group>
        <van-field placeholder="再次输入密码" />
      </van-cell-group>
      <van-cell-group>
        <van-field value center clearable placeholder="输入验证码" use-button-slot>
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
    <div class="reg-checkbox">
      <van-checkbox checked-color="#1989fa" shape="square" v-model="checkbox" @change="change"></van-checkbox>
      <div class="reg-checkbox-span">
        <span>
          我已经阅读并同意
          <a href="javascript:;" style="color:#0aa1ed">《商采通用户服务协议》</a>
        </span>
      </div>
    </div>
    <div class="reg-btn">
      <van-button round type="info" block size="small" :disabled="disabled" @click="btnPhone">下一步</van-button>
    </div>
  </div>
</template>
<script>
import steps from "../components/steps";
export default {
  data() {
    return {
      active: 0,
      checkbox: false,
      disabled: true
    };
  },
  methods: {
    change() {
      this.disabled = !this.disabled;
    },
    btnPhone() {
      this.$router.push("/gongsi");
    }
  },
  components: { steps }
};
</script>
<style lang="scss" scoped>
#reg {
  .reg-input {
    padding: 0 1.5rem 0.5rem 1.5rem;
  }

  .reg-checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    .reg-checkbox-span {
      font-size: 0.5rem;
      margin-left: 0.4rem;
    }
  }
  .reg-btn {
    padding: 3rem 2.5rem 0.5rem 2.5rem;
    height: 0.6rem;
  }
}
</style>