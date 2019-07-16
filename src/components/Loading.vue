<template>
  <div class="loading" v-if="this.$store.state.isShow">
    <div class="bg"></div>
    <van-loading size="24px" color="#ffffff" vertical>加载中...</van-loading>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loading {
  width: 100vw;
  height: 100vh;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}
/* .bg {
  width: 100vw;
  height: 100vh;
} */
.van-loading {
  position: relative;
  left: 50%;
  top: 50%;
  z-index: 10;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>

