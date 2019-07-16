<template>
  <van-tabbar
    v-model="active"
    :safe-area-inset-bottom="true"
    :route="true"
    active-color="#3296FA"
    inactive-color="#1A1A1A"
  >
    <van-tabbar-item to="/home">
      <span>首页</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
    </van-tabbar-item>
    <van-tabbar-item>
      <span>发现</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon2.active : icon2.normal" />
    </van-tabbar-item>
    <van-tabbar-item to="/my">
      <span>我的</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon3.active : icon3.normal" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal:
          "https://blog-gxsunny-cn.oss-cn-beijing.aliyuncs.com/tabbar/shouye.png",
        active:
          "https://blog-gxsunny-cn.oss-cn-beijing.aliyuncs.com/tabbar/shouye-xuanzhong.png"
      },
      icon2: {
        normal:
          "https://blog-gxsunny-cn.oss-cn-beijing.aliyuncs.com/tabbar/faxian.png",
        active:
          "https://blog-gxsunny-cn.oss-cn-beijing.aliyuncs.com/tabbar/faxian-xuanzhong.png"
      },
      icon3: {
        normal:
          "https://blog-gxsunny-cn.oss-cn-beijing.aliyuncs.com/tabbar/wode.png",
        active:
          "https://blog-gxsunny-cn.oss-cn-beijing.aliyuncs.com/tabbar/wode-xuanzhong.png"
      }
    };
  }
};
</script>

<style scoped>
.van-tabbar-item__icon img {
  height: 25px;
}
</style>
