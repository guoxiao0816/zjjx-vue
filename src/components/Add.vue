<template>
  <div>
    <div>
      <label>
        <span>作者</span>
        <input type="text" v-model="author" />
      </label>
    </div>
    <div>
      <label>
        <span>日期</span>
        <input type="text" v-model="date" />
      </label>
    </div>
    <div>
      <label>
        <span>链接</span>
        <input type="text" v-model="link" />
      </label>
    </div>
    <div>
      <label>
        <span>标题</span>
        <input type="text" v-model="title" />
      </label>
    </div>
    <div>
      <button @click="createCollect">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      author: "",
      date: "",
      link: "",
      title: ""
    };
  },
  methods: {
    createCollect() {
      axios
        .post("http://localhost:7001/api/collect", {
          author: this.author,
          date: this.date,
          link: this.link,
          title: this.title
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>