<template>
  <div id="yonghu">
    <div class="yonghu-img">
      <div>
        <van-image
          round
          width="4rem"
          height="4rem"
          v-if="avatar"
          :src="'http://127.0.0.1:5500/'+avatar"
        />
        <van-image
          round
          width="4rem"
          height="4rem"
          v-if="!uname"
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2258616609,4181715650&fm=26&gp=0.jpg"
        />
      </div>
      <div>
        <div>
          <p>
            <a href style="color:#fff">
              {{
              uname
              }}
            </a>
            <router-link style="color:#fff" to="/Login" v-if="!uname">未登录</router-link>
          </p>
          <van-icon name="setting-o" size="1.5rem" @click="routerShezhi" />
        </div>
        <div>
          <van-button
            icon="diamond-o"
            type="default"
            block
            size="small"
            round
            style="height:1.25rem;line-height:1.15rem;width:5rem;padding:0;color:#fwf;"
          >企业会员</van-button>
        </div>
      </div>
    </div>
    <div class="yonghu-dingdan">
      <div>
        <p>我的订单</p>
        <div @click="routerdingdan">
          <a href="javascript:;">查看全部</a>
          <van-icon name="arrow" />
        </div>
      </div>
      <div>
        <van-tabbar :fixed="false" :border="false" active-color="#333" inactive-color="#333">
          <van-tabbar-item
            style="font-size:.8rem"
            @click="$router.push({ path: '/dingdan/'+1 });"
            badge="5"
          >
            <span>待付款</span>
            <template #icon>
              <img src="http://img1.imgtn.bdimg.com/it/u=3464687884,3675992107&fm=26&gp=0.jpg" />
            </template>
          </van-tabbar-item>
          <van-tabbar-item
            icon="logistics"
            style="font-size:.8rem"
            @click="$router.push({ path: '/dingdan/'+2 });"
          >待发货</van-tabbar-item>
          <van-tabbar-item
            icon="todo-list-o"
            style="font-size:.8rem"
            @click="$router.push({ path: '/dingdan/'+3 });"
            badge="5"
          >待收货</van-tabbar-item>
          <van-tabbar-item
            icon="sign"
            style="font-size:.8rem"
            @click="$router.push({ path: '/dingdan/'+4 });"
            badge=" "
          >已完成</van-tabbar-item>
          <van-tabbar-item
            icon="cash-back-record"
            style="font-size:.8rem"
            @click="$router.push('/shouhou');"
            badge=" "
          >退 换/售后</van-tabbar-item>
        </van-tabbar>
      </div>
      <div class="yonghu-dingdan">
        <p>常用工具</p>
      </div>
      <div>
        <van-tabbar :fixed="false" :border="false" active-color="#333" inactive-color="#333" route>
          <van-tabbar-item icon="like-o" style="font-size:.8rem" to="/shangpingshoucang">商品收藏</van-tabbar-item>
          <van-tabbar-item icon="shop-o" style="font-size:.8rem" to="/dianpushoucang">店铺收藏</van-tabbar-item>
          <van-tabbar-item icon="flag-o" style="font-size:.8rem" to="/liulanjilu">浏览记录</van-tabbar-item>
          <van-tabbar-item icon="service-o" style="font-size:.8rem" @click="kefualter">客服选择</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
    <div @click="$router.push('/kefui');">
      <kefu></kefu>
    </div>
    <Home></Home>
  </div>
</template>
<script>
import kefu from "../views/kefu";
import Home from "../components/Home";
export default {
  data() {
    return {
      active: 0,
      show: false,
      login: false,
      uname: this.$store.state.user.user_name,
      avatar: this.$store.state.user.img
    };
  },
  watch: {
    login() {
      !this.uname ? (this.login = true) : (this.login = false);
    }
  },
  created() {
    this.loding();
  },
  components: { kefu, Home },
  methods: {
    kefualter() {
      this.$toast.fail("选择过了");
    },
    routerShezhi() {
      this.$router.push("/shezhi");
    },
    routerdingdan() {
      this.active = 0;
      this.$router.push({ path: "/dingdan/" + this.active });
    },
    loding() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      this.$toast.setDefaultOptions({ duration: 100 });
    }
  }
};
</script>
<style lang="scss">
$coloreee: #eee;
$colorfff: #fff;
#yonghu {
  a {
    text-decoration: none;
    color: #333;
  }
  background-color: $coloreee;
  .yonghu-img {
    background-color: #0aa1ed;
    height: 8rem;
    display: flex;
    align-items: center;
    padding: 0 2rem 0 2rem;
  }
  .yonghu-img > div:last-child {
    width: 100%;
    margin-left: 1rem;
    color: $colorfff;
    font-size: 0.8rem;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .yonghu-dingdan {
    padding: 0 0.8rem 0 0.8rem;
    background-color: $colorfff;
  }
  .yonghu-dingdan > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    padding-left: 1rem;
    padding-right: 0.1rem;
    div {
      display: flex;
      align-items: center;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      :first-child {
        margin-right: 0.4rem;
      }
    }
  }
}
</style>