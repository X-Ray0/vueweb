<template>
  <nav>
    <div class="navbar">
      <router-link to="/">{{ $t('nav.home') }}</router-link>
      <router-link to="/research">{{ $t('nav.research') }}</router-link>
      <router-link to="/publications">{{ $t('nav.publication') }}</router-link>
    </div>
    <div class="navbar-right">
      <LanguageToggle />
    </div>
  </nav>
</template>

<script>
import LanguageToggle from '@/components/LanguageToggle.vue'
export default {
  name: 'NavBar',
  components: { LanguageToggle }
}
</script>

<style scoped>
nav {
  max-width: 1200px !important;
  margin: 0 auto;
  background-color: #f8f8f8;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}

.navbar-right {
  display: flex;
  align-items: center;
}


nav a {
  max-width: 1200px !important;
  margin: 0 15px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

nav a:hover {
  color: #8b4513;
}

nav a.router-link-exact-active {
  color: #8b4513;
  font-weight: bold;
}

nav a.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #8b4513;
}
</style>