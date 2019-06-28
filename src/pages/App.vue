<template>
  <div id="app">
    <myNav></myNav>
    <!-- 给VueRoutter留坑！！ -->
    <router-view></router-view>
  </div>
</template>

<script>
import myNav from "./components/nav.vue";
export default {
  components: {
    myNav
  }
};
</script>
