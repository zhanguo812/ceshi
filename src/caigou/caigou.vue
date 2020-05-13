<template>
  <div id="caigou">
    <van-nav-bar title="采购单"></van-nav-bar>
    <div class="caigou-content">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-checkbox
          v-for="(item,index) in obj"
          :key="index"
          :name="index"
          style="padding:1rem;padding-right:0"
        >
          <div @click.stop>
            <caigouz></caigouz>
          </div>
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div class="caigou-content-bottom">
      <van-submit-bar
        :price="3050"
        :button-text="'结算('+`${count}`+')'"
        @submit="onSubmit"
        :safe-area-inset-bottom="false"
        style="margin-bottom:3rem;border:.01rem solid #eee;"
        :disabled="val"
      >
        <van-checkbox @click="checkAll" v-model="value">全选</van-checkbox>
      </van-submit-bar>
      <Home></Home>
    </div>
  </div>
</template>
<script>
import Home from "../components/Home";
import caigouz from "../caigou/caigouz";
export default {
  data() {
    return {
      result: [],
      obj: [1, 2],
      value: false,
      val: true,
      count: this.$store.state.count
    };
  },
  watch: {
    myValue() {
      //其他业务代码
      this.count = this.myValue;
    },
    result() {
      this.result.length == this.obj.length
        ? (this.value = true)
        : (this.value = false);

      if (this.result.length != 0) {
        this.val = false;
      } else {
        this.val = true;
      }
    }
  },
  created() {
    this.loding();
  },
  computed: {
    myValue() {
      return this.$store.state.count;
    }
  },
  methods: {
    checkAll() {
      !this.value
        ? this.$refs.checkboxGroup.toggleAll(true)
        : this.$refs.checkboxGroup.toggleAll();
      console.log(this.result);
    },
    a() {
      console.log(this.result);
    },
    onSubmit() {
      //提交订单按钮
      this.$router.push("/querendingdan");
    },
    loding() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      this.$toast.setDefaultOptions({ duration: 100 });
    }
  },
  components: { Home, caigouz }
};
</script>
<style lang="scss" scoped>
#caigou {
  .caigou-content-bottom {
    margin-top: 5.9rem;
  }
}
</style>