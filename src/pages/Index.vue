<template>
  <div id="index">
    <h1>hello world!</h1>
    <p>halo Viola</p>
    <div v-for="(img, index) in imgList" :key="index">
      <img :src="img">
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: function() {
    return {
      imgList: []
    };
  },
  mounted() {
    this.$ajax.get("/api/pictureList").then(res => {
      this.imgList = res.data.data;
    });
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$width: 50rem;
#index {
  margin-top: 60px;
  transform: rotate(0deg);
  img {
    width: $width;
  }
}
</style>


