<template>
  <div class="language-toggle">
    <button :class="{ active: activeLang === 'cn' }" @click="setLanguage('cn')">
      中文
    </button>
    <button :class="{ active: activeLang === 'en' }" @click="setLanguage('en')">
      EN
    </button>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale } = useI18n({ useScope: 'global' })

    const setLanguage = (lang) => {
      locale.value = lang
    }

    return {
      activeLang: locale,
      setLanguage
    }
  }
}
</script>

<style scoped>
.language-toggle {
  max-width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
}

.language-toggle button {
  background: none;
  border: none;
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 3px;
  transition: all 0.3s;
}

.language-toggle button.active {
  background-color: #8b4513;
  color: white;
}

.language-toggle button:hover {
  background-color: #f0f0f0;
}
</style>