<template>
  <div id="gooddetail">
    <van-icon color="white" name="arrow-left" size="20" id="back" @click="gotoback()" />

    <van-swipe :autoplay="4000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in goods_picture" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <div class="briefintroduce">
      <!-- <span class="big font20 colred">￥{{goodsType.goodsPrice}} \n</span> -->
      <div class="font13 col8 mt10 line-t">{{goodsDetail.g_desc}}</div>
      <div class="font18 big mt10">{{goodsDetail.goods_name}}</div>
      <div class="col8 mt20 font12">
        <span>快递：{{goodsDetail.goods_postage}}</span>
        <span class="fr">销量：{{goodsDetail.g_sales_volume ? goodsDetail.g_sales_volume:"500+"}}</span>
      </div>
    </div>

    <div class="artile">
      <div class="title">宝贝详情</div>
      <img v-lazy="img" alt v-for="(img,index) in goodsImgs" :key="index" />
    </div>

    <van-goods-action :safe-area-inset-bottom="true">
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "gooddetail",
  data() {
    return {
      g_id: this.$route.params.g_id,
      goodsDetail: {},
      goodsImgs: [],
      goodsSku: [],
      goods_picture: []
    };
  },
  created() {},
  mounted() {
    this.getGoodData(this.g_id);
    // console.log(this.$route.params);
  },
  methods: {
    getGoodData(g_id) {
      //获取数据
      let self = this;
      axios
        .post("/api/goods/get_goods_detail", {
          id: g_id,
          v: "1.1.0"
        })
        .then(result => {
          console.log(result.data);

          self.goodsDetail = result.data.data.goodsDetail;
          self.goodsImgs = result.data.data.goodsImgs;
          self.goodsSku = result.data.data.goodsSku;
          self.goods_picture = result.data.data.goods_picture;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    gotoback() {
      if (this.$route.query.goindex === "true") {
        this.$router.push("/");
      } else {
        this.$router.back(-1);
      }
    },
    onClickIcon() {
      Toast("点击图标", {
        duration: 2000
      });
    },
    onClickButton() {
      Toast("点击按钮", {
        duration: 1000
      });
    }
  }
};
</script>

<style scoped>
#gooddetail {
  padding-bottom: 50px;
}
#back {
  position: fixed;
  z-index: 99;
  top: 31px;
  padding: 3px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  left: 10px;
}
.van-swipe {
  width: 375px;
  height: 375px;
}

.van-swipe img {
  width: 100%;
  height: 100%;
}

.artile {
  width: 375px;
}

.artile .title {
  width: 100%;
  line-height: 44px;
  font-size: 18px;
  color: black;
  text-align: center;
}
.artile img {
  width: 100%;
}

.briefintroduce {
  width: 375px;
  padding: 20px 15px 10px;
  background: whitesmoke;
}
</style>
