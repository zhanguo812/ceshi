<template>
  <div id="shezhi">
    <van-nav-bar title="账户设置" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="shezhi-content">
      <div class="shezhi-content-item">
        <div class="shezhi-content-item-div">
          <van-image width="4rem" v-if="avatar" height="4rem" :src="'http://127.0.0.1:5500/'+avatar" />
        </div>
        <div>
          <van-field v-model="value" label="昵称" :placeholder="uname" input-align="right" />
        </div>
        <div>
          <van-cell title="性别" is-link :value="gender" @click="showPicker1" />
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>
        </div>
        <div>
          <van-cell title="地址管理" is-link to="/seldizi" value="新增/修改地址" />
        </div>
        <div>
          <van-cell title="修改密码" is-link to="/mima" />
        </div>
      </div>
      <div class="shezhi-content-btn">
        <van-button block color="#0aa1ed" style="height:2rem;line-height:2rem">保存</van-button>
      </div>
      <div class="shezhi-content-btn" style="padding-bottom:1rem">
        <van-button block color="#aaa" style="height:2rem;line-height:2rem" @click="del">退出登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      gender: "",
      columns: ["男", "女"],
      showPicker: false,
      uname: "",
      user_uname: this.$store.state.user.user_name,
      avatar: ""
    };
  },
  created() {
    this.axios
      .get("/user/sellogin", {
        params: {
          uname: this.user_uname
        }
      })
      .then(res => {
        console.log(res.data);
        this.uname = res.data.result[0].uname;
        if (res.data.result[0].gender == 1) {
          this.gender = "男";
        } else {
          this.gender = "女";
        }
        this.avatar = res.data.result[0].avatar;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    del() {
      this.$router.push("/login");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    onConfirm(value) {
      this.value1 = value;
      this.showPicker = false;
    },
    showPicker1() {
      this.showPicker = true;
    }
  }
};
</script>
<style lang="scss">
$coloreee: #eee;
$colorfff: #fff;
$g-media-xs: 767px;
#shezhi {
  background-color: $coloreee;
  height: $g-media-xs;
  .shezhi-content {
    background-color: $coloreee;
    padding-top: 1rem;
    .shezhi-content-item {
      background-color: $colorfff;
      padding-left: 2rem;
      padding-right: 1rem;
      padding-top: 0.5rem;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
      .shezhi-content-item-div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 0.9rem;
      }
    }
    .shezhi-content-btn {
      padding-left: 2rem;
      padding-right: 2rem;
      margin-top: 1rem;
    }
  }
}
</style>