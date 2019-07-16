<template>
  <div class="header" @click="getHomeFun()" data-id="123" :title="title">
    <span>{{title}}</span>
    <button @click.stop="getParent()">getParent</button>
  </div>
</template>

<script>
export default {
  props: ["title", "home"],
  data() {
    return {
      vipMy: "专供My组件调用"
    };
  },
  mounted() {
    console.log("header Vue模块加载完毕");
  },
  methods: {
    event(e) {
      console.log(e.srcElement.dataset.id);
    },
    getHomeFun() {
      this.home.getHome();
    },
    getParent() {
      console.log(this.$parent.vipParent);
    }
  }
};
</script>

