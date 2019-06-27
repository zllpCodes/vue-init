<template>
  <ul id="list">
    <li v-for="(item, index) in list" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "list",
  data: function() {
    return {
      list: [
          'to-do-1',
          'to-do-2',
          'to-do-3'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#list {
    text-align: left;
}
</style>


