<template>
  <div id="dianpushouchangz">
    <div class="dianpushouchangz-img">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585681352833&di=aa55239657e6f94ffde33b783ed89f67&imgtype=0&src=http%3A%2F%2Fimg11.weikeimg.com%2Fdata%2Fuploads%2F2014%2F11%2F08%2F1403907858545dfb101d535.jpg"
        alt
      />
    </div>
    <div class="dianpushouchangz-title">
      <span>耐尔金品牌专营店</span>
      <span>时尚3c数码周边产品的品牌</span>
    </div>
    <div class="dianpushouchangz-icon">
      <span>
        <van-icon name="star" color="yellow" />
      </span>
      <span>已收藏</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#dianpushouchangz {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  padding: 0.3rem;
  border: 0.001rem solid #eee;
  height: 7.5rem;
  .dianpushouchangz-img {
    img {
      width: 7.5rem;
      height: 7.5rem;
    }
  }
  .dianpushouchangz-title {
    height: 7.5rem;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    span:last-child {
      font-size: 0.8rem;
    }
  }
  .dianpushouchangz-icon {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>