<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style>
* {
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #fafafa;
  color: #333;
  line-height: 1.6;
}
</style>