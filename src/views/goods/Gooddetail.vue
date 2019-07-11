<template>
  <div id>h1 goodspage</div>
</template>

<script>
export default {
  name: "gooddetail",
  data() {
    return {};
  },
  created() {
    console.log(this.$route.params);
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<style>
</style>
