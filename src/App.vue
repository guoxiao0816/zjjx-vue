<template>
  <div id="page">
    <!-- <Header /> -->
    <router-view></router-view>
    <!-- <Loading /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";

// import Loading from "./components/Loading";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
    // Loading
  },
  data() {
    //业务逻辑里面定义的数据
    return {
      //
    };
  }
};
</script>
<style>
@import "styles/default.css";
#page {
  width: 375px;
  background-color: #f8f8f9;
  margin: 0 auto;
}
</style>
