<template>
  <nav id="myNav">
    <router-link v-for="(link, index) in linkList" :to="link.href" :key="index">{{link.text}}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'myNav',
  data: function() {
      return {
          linkList: [
              {
                  href: '/',
                  text: 'Home'
              },
              {
                  href: '/list',
                  text: 'List'
              }
          ]
      }
  }
};
</script>
