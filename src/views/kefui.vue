<template>
  <div id="kefui">
    <van-nav-bar title="咨询客服，享受美好..." left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="kefui-content">
      <div class="kefui-content-img">
        <img src="../assets/01.jpg" alt />
      </div>
      <div class="kefui-content-title">
        <div>专属客户经理</div>
        <span>评分：4.5</span>
      </div>
      <div class="kefui-content-subtitle">
        <div>服务理念</div>
        <div>愿所有的幸运，都不期而遇；愿所有的美好</div>
      </div>
      <div class="kefui-content-jinagyan">
        <div>
          <span>
            <span class="span-1">3年</span>
            <span>经验</span>
          </span>
          <span>
            <span class="span-1">44人</span>
            <span>服务人数</span>
          </span>
        </div>
      </div>
      <div class="kefui-content-btn">
        <van-button
          round
          type="default"
          block
          style="height:2.5rem;line-height:2.5rem; border:1px solid #0aa1ed;color:#0aa1ed"
        >与他/她聊天</van-button>
        <div style="width:3rem"></div>
        <van-button round type="info" block style="height:2.5rem;line-height:2.5rem">电话联系</van-button>
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
#kefui {
  .kefui-content {
    padding: 0.2rem 1rem 0.3rem 1rem;
    .kefui-content-img {
      height: 20rem;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .kefui-content-title {
      display: flex;
      align-items: center;
      margin-top: 0.4rem;
      div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 1.15rem;
        width: 6rem;
        font-weight: 600;
      }
    }
    .kefui-content-btn {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .kefui-content-subtitle {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      div:first-child {
        font-weight: 600;
        font-size: 1.15rem;
      }
      div:last-child {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 15rem;
        font-size: 0.95rem;
        color: #0aa1ed;
        margin-left: 0.5rem;
      }
    }
    .kefui-content-jinagyan {
      background-color: #eee;
      margin-left: 2rem;
      margin-right: 2rem;
      margin-top: 1.5rem;
      height: 3rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        .span-1 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #000;
        }
      }
    }
  }
}
</style>