<template>
  <div id="gongsi">
    <steps :active="active"></steps>
    <div class="reg-input">
      <van-cell-group :border="false" style="border-bottom:0.005rem solid gray">
        <p class="gongsi-input-p">
          公司名称
          <span>(必填)</span>
        </p>
        <van-field placeholder="请按照营业执照填写" />
      </van-cell-group>
      <p class="gongsi-input-p-font">*不得超过20个字符</p>
      <van-cell-group :border="false" style="border-bottom:0.005rem solid gray">
        <p class="gongsi-input-p">
          公司行业
          <span>(必填)</span>
        </p>
        <van-field placeholder="请选择行业" right-icon="arrow" @focus="foucus1" v-model="value" />
      </van-cell-group>
      <p class="gongsi-input-p-font">*请选择真实行业,以便为您匹配更加专业的客户经理</p>
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <van-cell-group :border="false" style="border-bottom:0.005rem solid gray">
        <p class="gongsi-input-p">
          公司地址
          <span>(必填)</span>
        </p>
        <van-field placeholder="请选择公司地址" right-icon="arrow" @focus="foucus2" v-model="value1" />
      </van-cell-group>
      <van-popup v-model="showPicker1" position="bottom">
        <van-picker
          show-toolbar
          title="标题"
          :columns="columns1"
          @cancel="showPicker1 = false"
          @confirm="onConfirm1"
        />
      </van-popup>
      <van-cell-group :border="false" style="border-bottom:0.005rem solid gray">
        <p class="gongsi-input-p">
          公司类型
          <span>(必填)</span>
        </p>
        <van-field placeholder="请选择公司类型" right-icon="arrow" @focus="foucus3" v-model="value2" />
      </van-cell-group>
      <van-popup v-model="showPicker2" position="bottom">
        <van-picker
          show-toolbar
          title="标题"
          :columns="columns2"
          @cancel="showPicker2 = false"
          @confirm="onConfirm2"
        />
      </van-popup>
      <van-cell-group :border="false" style="border-bottom:0.005rem solid gray">
        <p class="gongsi-input-p">
          公司人数
          <span>(必填)</span>
        </p>
        <van-field placeholder="请选择公司人数" right-icon="arrow" @focus="foucus4" v-model="value3" />
      </van-cell-group>
      <van-popup v-model="showPicker3" position="bottom">
        <van-picker
          show-toolbar
          title="标题"
          :columns="columns3"
          @cancel="showPicker3 = false"
          @confirm="onConfirm3"
        />
      </van-popup>
      <van-cell-group :border="false" style="border-bottom:0.005rem solid gray">
        <p class="gongsi-input-p">
          联系人职务
          <span>(必填)</span>
        </p>
        <van-field placeholder="请选择联系人职务" right-icon="arrow" @focus="foucus5" v-model="value4" />
      </van-cell-group>
      <van-popup v-model="showPicker4" position="bottom">
        <van-picker
          show-toolbar
          title="标题"
          :columns="columns4"
          @cancel="showPicker4 = false"
          @confirm="onConfirm4"
        />
      </van-popup>
      <div>
        <p class="gongsi-input-p">上传有效证件</p>
        <div class="gongsi-input-p" style="margin-top:2rem">
          <van-uploader v-model="fileList" multiple />
          <p
            style="margin-bottom:4rem;font-size: 0.65rem;
      color: gray;"
          >*请选择真实行业,以便为您匹配更加专业的客户经理</p>
        </div>
      </div>
    </div>
    <div class="gongsi-btn">
      <div class="gongsi-btn-item">
        <van-button round type="info" block size="small" @click="routerkufusel">下一步</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import steps from "../components/steps";
export default {
  data() {
    return {
      active: 1,
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      showPicker: false,
      showPicker1: false,
      showPicker2: false,
      showPicker3: false,
      showPicker4: false,
      columns: [
        "医疗健康及社会社会养老",
        "旅游休闲",
        "美容美发",
        "保险",
        "餐饮"
      ],
      columns1: [
        {
          text: "浙江",
          children: [
            {
              text: "杭州",
              children: [{ text: "西湖区" }, { text: "余杭区" }]
            },
            {
              text: "温州",
              children: [{ text: "鹿城区" }, { text: "瓯海区" }]
            }
          ]
        },
        {
          text: "福建",
          children: [
            {
              text: "福州",
              children: [{ text: "鼓楼区" }, { text: "台江区" }]
            },
            {
              text: "厦门",
              children: [{ text: "思明区" }, { text: "海沧区" }]
            }
          ]
        }
      ],
      columns2: [
        "私营企业",
        "个体工商户",
        "国有企业",
        "集体所有制企业",
        "股份所有制企业"
      ],
      columns3: [
        "请选择公司人数",
        "50人以下",
        "50~99人",
        "100~199人",
        "200~500人",
        "500以上"
      ],
      columns4: [
        "请选择联系人职务",
        "采购专员",
        "采购经理",
        "财务经理",
        "行政专员",
        "行政经理",
        "管理层",
        "企业主"
      ],
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    onConfirm(value) {
      this.value = "" + value;
      this.showPicker = false;
    },
    onConfirm1(value) {
      this.value1 = "" + value;
      this.showPicker1 = false;
    },
    onConfirm2(value) {
      this.value2 = "" + value;
      this.showPicker2 = false;
    },
    onConfirm3(value) {
      this.value3 = "" + value;
      this.showPicker3 = false;
    },
    onConfirm4(value) {
      this.value4 = "" + value;
      this.showPicker4 = false;
    },
    foucus1() {
      this.showPicker = true;
    },
    foucus2() {
      this.showPicker1 = true;
    },
    foucus3() {
      this.showPicker2 = true;
    },
    foucus4() {
      this.showPicker3 = true;
    },
    foucus5() {
      this.showPicker4 = true;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    routerkufusel() {
      this.$router.push("/kefusel");
    }
  },
  components: { steps }
};
</script>
<style lang="scss" scoped>
#gongsi {
  p {
    padding: 0;
    margin: 0;
  }
  .reg-input {
    padding: 0 1.5rem 0.5rem 1.5rem;
    .gongsi-input-p {
      padding-left: 1rem;
      margin-top: 0.9rem;
    }
    .gongsi-input-p-font {
      padding-left: 1rem;
      font-size: 0.65rem;
      color: gray;
    }
  }
  span {
    color: gray;
  }
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
      width: 75%;
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
</style>