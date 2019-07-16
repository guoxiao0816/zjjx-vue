<template>
  <div>
    <Header :title="mytitle" :home="this" ref="head" />
    <h3>个人中心</h3>
    <button @click="getChild()">getChild</button>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toast } from "vant";
export default {
  name: "my",
  components: {
    Header: Header,
    Footer
  },
  data() {
    return {
      mytitle: "我是个人中心的title",
      vipParent: "专供子组件调用的vipParent"
    };
  },
  methods: {
    getHome() {
      console.log(this.mytitle);
    },
    getChild() {
      // console.log(this.$refs.head.vipMy)
      Toast(this.$refs.head.vipMy);
    }
  }
};
</script>

<style>
</style>
