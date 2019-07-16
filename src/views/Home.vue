<template>
  <div class="home">
    <Header :title="hometitle" :home="this"/>
    <HelloWorld />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {
    HelloWorld,
    Header,
    Footer
  },
  data() {
    return {
      hometitle: "我是home里面的首页"
    };
  },
  methods: {
    getHome() {
      console.log(this.hometitle);
    }
  }
};
</script>
