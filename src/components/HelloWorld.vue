<template>
  <div class="page">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <!-- 轮播 -->
    <van-swipe :autoplay="6000" indicator-color="white" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.ad_img" />
      </van-swipe-item>
    </van-swipe>

    <!-- 分类列表 -->
    <van-row class="catelist" type="flex" justify="space-between">
      <van-col span="8" v-for="item in catelist.activity" :key="item.gc_id">
        <img class="cate-item" v-lazy="item.gc_icon" />
      </van-col>
    </van-row>
    <van-row class="cate" type="flex" justify="center">
      <van-col span="7" v-for="item in catelist.cate" :key="item.gc_id">
        <img class="cate-img" v-lazy="item.gc_icon" />
        <p class="mt10">{{item.gc_name}}</p>
      </van-col>
    </van-row>

    <!-- 分隔标题 -->
    <van-row type="flex" class="title">
      <van-col span="24">热销爆款</van-col>
    </van-row>

    <!-- 商品列表 -->
    <van-row class="goodslist pd5" justify="space-between">
      <van-col
        span="12"
        class="pd5"
        v-for="good in goods_list"
        :key="good.g_id"
        :data-id="good.g_id"
      >
        <img v-lazy="good.g_photo" @click="gotoDetail(good.g_id)" />
        <p class="text pt10 pb5">{{good.g_name}}</p>
        <h4 class="colred font20 big">￥{{good.g_price}}</h4>
        <p class="font12 col8 line-t mt5">淘宝价: 暂无 京东: 暂无</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Toast } from "vant";
// import { constants } from "crypto";
export default {
  data() {
    return {
      current: 0,
      images: [],
      catelist: [],
      goods_list: [],
      value: ""
    };
  },
  created() {
    let self = this;
    axios
      .get("api/Goods/goods_index", {
        params: {
          c_client: "weixinSmall",
          v: "1.1.0"
        }
      })
      .then(function(response) {
        console.log(response.data);
        self.goods_list = response.data.data.goods_list;
      })
      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("api/Ad/get_list", {
        params: {
          c_client: "weixinSmall",
          ad_page: "4",
          v: "1.1.0"
        }
      })
      .then(res => {
        self.images = res.data.data;
      });

    axios
      .get("api/GoodsCategory/getCateList", {
        params: {
          c_client: "weixinSmall",
          v: "1.1.0",
          type: "goods_index"
        }
      })
      .then(res => {
        self.catelist = res.data.data;
      });
  },
  methods: {
    onChange(index) {},
    onSearch(e) {
      console.log(this.value);
      if (this.value.length < 1) {
        Toast("请输入关键字");
      }
    },
    gotoDetail(id) {
      console.log(id);
      this.$router.push({
        name: "gooddetail",
        params: {
          g_id: id
        }
      });
    }
  }
};
</script>

<style scoped>
.page {
  min-height: 100vh;
}
.van-swipe {
  width: 355px;
  margin: 10px;
  height: 200px;
  border-radius: 5px;
}

.van-swipe img {
  width: 100%;
  height: 100%;
}
.catelist {
  width: 375px;
  padding: 10px;
}
.cate-item {
  width: 110px;
  height: 100px;
}
.cate {
  text-align: center;
  padding: 10px;
}
.cate-img {
  width: 53px;
  height: 53px;
}
.title {
  text-align: center;
  background: rgba(255, 255, 255, 1);
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  margin-top: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
}

.goodslist {
  background-color: white;
}
.goodslist img {
  width: 100%;
  height: 170px;

  border-radius: 5px;
}
</style>

