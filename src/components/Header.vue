<template>
  <div class="header" ref="head" @click="event($event)" data-id="123" :title="headtie">通用header头部</div>
</template>

<script>
export default {
  data() {
    return {
      headtie: "我是head"
    };
  },
  mounted() {
    // console.log("header Vue模块加载完毕");
    console.log(this);
    setTimeout(() => {
      console.log(this.$refs.head); //获取DOM节点
    }, 2000);
  },
  methods: {
    event(e) {
      console.log(e.srcElement.dataset.id);
    }
  }
};
</script>

