<template>
  <div id="login">
    <img
      src="http://imgsrc.baidu.com/forum/w=580/sign=97a01b75820a19d8cb03840d03fb82c9/99c5fa13b07eca803e277b23932397dda044832c.jpg"
      alt
    />
    <div class="login-image">
      <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="login-input">
      <van-cell-group style="height:44px">
        <van-field placeholder="输入用户名或手机号" v-model="uname" :onchange="onchange" />
      </van-cell-group>
      <van-cell-group v-if="isMi1" style="height:44px">
        <van-field placeholder="输入验证码" use-button-slot>
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-cell-group v-if="isMi2" style="height:44px">
        <van-field v-model="upwd" type="password" placeholder="请输入密码" />
      </van-cell-group>
      <div class="login-a">
        <a href="javascript:;" @click="isChange(1)" :class="{'active':active1}">验证码登录</a>
        <a href="javascript:;" @click="isChange(-1)" :class="{'active':active2}">密码登录</a>
      </div>
      <div class="login-btn">
        <van-button
          round
          type="info"
          block
          custom-style="width:100%"
          @click="router1"
          style="height:2rem;line-height:2rem"
        >登录</van-button>
      </div>
      <div class="login-zhuce">
        <a href="javascript:;" v-if="active1" @click="router">立即注册</a>
        <div v-if="active2">
          <a href="javascript:;" @click="routerMima">忘记密码</a>
          <span>|</span>
          <a href="javascript:;" @click="router">立即注册</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      uname: "",
      upwd: "",
      active1: true, //状态切换
      active2: false,
      isMi1: true,
      isMi2: false
    };
  },
  methods: {
    isChange(i) {
      if (i == 1) {
        this.active1 = true;
        this.active2 = false;
        this.isMi1 = true;
        this.isMi2 = false;
      } else if (i == -1) {
        this.active1 = false;
        this.active2 = true;
        this.isMi1 = false;
        this.isMi2 = true;
      }
    },
    onchange() {},
    router() {
      this.$router.push("/reg");
    },
    router1() {
      console.log(this.uname);
      console.log(this.upwd);
      this.axios
        .get("/user/login", {
          params: {
            uname: this.uname,
            upwd: this.upwd
          }
        })
        .then(res => {
          console.log(res.data.result[0].uid);
          if (res.data.code == 1) {
            this.$store.commit("get", res.data.result[0].user_name);
            this.$store.commit("get1", res.data.result[0].avatar);
            this.$store.commit("getid", res.data.result[0].uid);
            this.$router.push("/yonghu");
          } else {
            Dialog.alert({
              message: res.data.msg
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    routerMima() {
      this.$router.push("/mima");
    }
  }
};
</script>
<style lang="scss" scoped>
$color333: #333;
$colore1d: #0aa1ed;
#login {
  position: relative;
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    height: 50%;
  }
  .login-image {
    position: absolute;
    top: 30%;
    left: 40%;
  }
  .login-input {
    padding: 0.2rem 2rem 0.2rem 2rem;
    .van-cell {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .login-a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    padding-top: 1rem;
  }
  .login-a > a:last-child,
  a:first-child {
    color: $color333;
    font-size: 0.5rem;
  }
  .login-a > a.active {
    color: $colore1d;
  }
  .login-btn {
    width: 100%;
    margin-top: 4rem;
  }
  .login-zhuce {
    margin-top: 1rem;
    text-align: center;
    div > span {
      margin-left: 0.4rem;
      margin-right: 0.4rem;
    }
  }
  .login-zhuce a {
    color: $color333;
    font-size: 0.5rem;
  }
}
</style>