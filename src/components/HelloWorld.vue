<template>
  <div class="page">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="6000" indicator-color="white" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index" :item="image">
        <img v-lazy="image.ad_img">
      </van-swipe-item>
    </van-swipe>
    <van-row gutter="20" class="catelist">
      <van-col span="8" v-for="item in catelist.activity" :key="item.gc_id">
        <img class="cate-item" v-lazy="item.gc_icon">
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      current: 0,
      images: [],
      catelist: [],
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
    onSearch() {}
  }
};
</script>

<style scoped>
.page {
  width: 750px;
  background-color: #f8f8f9;
}
.van-swipe {
  width: 710px;
  margin: 20px;
  height: 400px;
}

.van-swipe img {
  width: 100%;
  height: 100%;
}
.catelist {
  width: 710px;
  padding: 20px;
}
.cate-item {
  width: 220px;
  height: 200px;
}
</style>

