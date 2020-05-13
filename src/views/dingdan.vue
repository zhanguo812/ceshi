<template>
  <div id="dingdan">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="dingdan-tab">
      <van-tabs v-model="active" swipeable swipe-threshold="5">
        <van-tab v-for="(item,index ) in title" :title="item" :key="index">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh" head-height="80">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <div class="dingdan-tab-ref" v-for="index in list" :key="index">
                <weizhifu v-if="active==1||active==0"></weizhifu>
              </div>
            </van-list>

            <div style="padding-bottom:4rem" v-if="active>0"></div>
            <div class="gongsi-btn" v-if="active==1">
              <div class="gongsi-btn-item">
                <van-button round type="default" size="small" color="#22f">合并付款</van-button>
              </div>
            </div>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import weizhifu from "../caigou/weizhifu";
import { Toast } from "vant";
export default {
  data() {
    return {
      loading: false,
      finished: false,
      count: 0,
      list: [],
      isLoading: false,
      title: ["全部", "待付款", "待发货", "待收货", "已完成"],
      active: 1,
      result: ["a", "b"]
    };
  },
  created() {
    let id = this.$route.params.active;
    this.active = +id;
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 15) {
          this.finished = true;
        }
      }, 2000);
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: { weizhifu }
};
</script>
<style lang="scss">
#dingdan .c {
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
}
#dingdan {
  .dingdan-tab {
    .gongsi-btn {
      position: fixed;
      background-color: #fff;
      bottom: 0%;
      width: 100%;
      z-index: 999;
      display: flex;
      height: 4rem;
      justify-content: center;
      align-items: center;
      .gongsi-btn-item {
        width: 90%;
        text-align: right;
        span {
          font-size: 0.93rem;
          font-weight: 300;
        }
      }
      span {
        color: #fff;
      }
    }
  }
}
</style>