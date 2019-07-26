<template>
  <div class="home">
    <HelloWorld />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Header from "../components/Header";
import Footer from "../components/Footer";
import vueEvent from "../model/vueEvent";

export default {
  components: {
    HelloWorld,
    Header,
    Footer
  },
  data() {
    return {
      hometitle: "我是home里面的数据"
    };
  },
  methods: {
    emitMy() {
      vueEvent.$emit("to-my", this.hometitle);
    }
  }
};
</script>
