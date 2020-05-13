<template>
  <div id="seldizi">
    <van-nav-bar title="选择收货地址" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="seldizi-dizhi">
      <div class="seldizi-dizhi-router">
        <van-cell title="配送地址" style="background-color:#eee;color:gray" to="/dizhi">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon class="seldizi-dizhi-icon">
            <van-icon name="plus" style="line-height: inherit;" size="1rem" color="#000" />
            <span style="color:#000;margin-left:.1rem;padding-top:.15rem">新层地址</span>
          </template>
        </van-cell>
      </div>
    </div>
    <div>
      <xianshidizhi :address="address"></xianshidizhi>
      <xianshidizhi></xianshidizhi>
    </div>
  </div>
</template>
<script>
import xianshidizhi from "./xianshidizhi";
export default {
  data() {
    return {
      userId: 0,
      address: {
        addressDetail: "",
        userId: this.$store.state.user.uid,
        name: "",
        city: "",
        county: "",
        province: "",
        tel: ""
      }
    };
  },
  created() {
    this.userId = this.$store.state.user.uid;
    this.axios
      .get("user/seladdress", {
        params: {
          user_id: this.userId
        }
      })
      .then(res => {
        console.log(res.data);
        this.address.city = res.data.result[0].city;
        this.address.county = res.data.result[0].county;
        this.address.addressDetail = res.data.result[0].address;
        this.address.name = res.data.result[0].receiver;
        this.address.province = res.data.result[0].province;
        this.address.tel = res.data.result[0].cellphone;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: { xianshidizhi }
};
</script>
<style lang="scss">
#seldizi {
  .seldizi-dizhi {
    background-color: #eee;
    .seldizi-dizhi-router {
      padding-left: 1rem;
      padding-right: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .seldizi-dizhi-icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>