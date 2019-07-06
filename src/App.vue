<template>
  <div id="page">
    <!-- <HelloWorld /> -->
    <router-link to="add">写博客</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
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
