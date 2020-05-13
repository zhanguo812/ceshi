<template>
  <div id="dizhi">
    <van-nav-bar title="编辑收货地址" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      save-button-text
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      :address-info="addressInfo"
    />
  </div>
</template>
<script>
import { Toast } from "vant";
import AreaList from "../components/area";
export default {
  data() {
    return {
      areaList: AreaList,
      searchResult: [],
      addressInfo: {
        addressDetail: "",
        areaCode: "",
        userId: 0,
        isDefault: "",
        name: "",
        postalCode: "",
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
          user_id: +this.userId
        }
      })
      .then(res => {
        console.log(res.data);
        this.addressInfo.addressDetail = res.data.result[0].address;
        this.addressInfo.areaCode = res.data.result[0].areaCode;
        if (res.data.result[0].is_default == 1) {
          this.addressInfo.isDefault = true;
        }
        (this.addressInfo.name = res.data.result[0].receiver),
          (this.addressInfo.postalCode = res.data.result[0].postcode);
        this.addressInfo.province = res.data.result[0].province;
        this.addressInfo.tel = res.data.result[0].cellphone;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave(content) {
      Toast("成功");
      console.log(content);
    },
    onDelete() {
      Toast("删除");
      this.searchResult = [];
    },
    onChangeDetail(val) {
      console.log(val);
      if (val) {
        this.searchResult = [
          {
            name: val,
            address: val
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
<style lang="scss">
</style>