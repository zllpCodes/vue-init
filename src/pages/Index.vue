<template>
  <div id="index">
    <h1>hello world!</h1>
    <p>halo Viola</p>
    <div v-for="(img, index) in imgList" :key="index">
      <img :src="img">
    </div>
    <div class="nice-pic"></div>
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
      let result = res.data;
      if(result.code !== 200) return;
      this.imgList = result.data;
    });
  }
};
</script>
