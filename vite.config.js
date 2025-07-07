import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vueweb/' : '/',
  
  build: {
    outDir: 'dist',
    assetsDir: 'static',  // 更安全的资源目录名
    emptyOutDir: true,
    assetsInlineLimit: 4096, // 小文件转base64
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-i18n': ['vue-i18n'],
          'vue-vendor': ['vue', 'vue-router'] // 添加核心库分组
        },
        assetFileNames: 'static/[name]-[hash][extname]' // 清晰的资源命名
      }
    }
  },

  optimizeDeps: {
    include: ['vue-i18n' ,
      'vue',
      'vue-router'
    ] // 确保预构建
  },

  json: {
    stringify: true // 防止JSON解析问题
  },

  plugins: [
    vue(),
    vueDevTools(),
    visualizer({ open: true }) // 构建分析插件（放在最后）
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})