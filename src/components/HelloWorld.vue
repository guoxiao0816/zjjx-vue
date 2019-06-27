<template>
  <van-swipe :autoplay="6000" indicator-color="white">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image">
    </van-swipe-item>
    <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      images: []
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
        self.images = res.data;
      });
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style>
</style>
