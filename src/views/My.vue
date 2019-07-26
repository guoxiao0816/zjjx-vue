<template>
  <div>
    <Header />
    <h3>个人中心</h3>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toast } from "vant";
import vueEvent from "../model/vueEvent";

export default {
  name: "my",
  components: {
    Header: Header,
    Footer
  },
  mounted() {
    vueEvent.$on("to-my", res => {
      console.log(res);
    });
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
</style>
