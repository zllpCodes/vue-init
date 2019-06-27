<template>
  <nav id="myNav">
    <a v-for="(link, index) in linkList" :href="link.href" :key="index">{{link.text}}</a>
  </nav>
</template>

<script>
export default {
  name: 'myNav',
  data: function() {
      return {
          linkList: [
              {
                  href: '/home',
                  text: 'Home'
              },
              {
                  href: '/list',
                  text: 'List'
              },
              {
                  href: '/about',
                  text: 'About'
              }
          ]
      }
  }
};
</script>


<style lang="scss" scoped>
#myNav {
    a {
        display: inline-block;
        margin: 0 10px;
    }
}
</style>
