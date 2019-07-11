<template>
  <div id="page">
    <!-- <Header /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header
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
