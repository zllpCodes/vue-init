<template>
  <div id="app">
    <myNav></myNav>
    <h1>hello world!</h1>
    <p>halo Viola</p>
    <div v-for="(img, index) in imgList" :key="index">
      <img :src="img">
    </div>
  </div>
</template>

<script>
import myNav from "./components/nav.vue";
export default {
  name: "app",
  data: function() {
    return {
      imgList: []
    };
  },
  mounted() {
    this.$ajax.get("/api/pictureList").then(res => {
      this.imgList = res.data.data;
    });
  },
  components: {
    myNav
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$width: 50rem;
#app {
  text-align: center;
  color: burlywood;
  margin-top: 60px;
  transform: rotate(0deg);
  img {
    width: $width;
  }
}
</style>


