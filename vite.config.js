import { resolve} from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {

  const isProd = mode === 'production'
  // const isDev = mode === 'development'

  let build = {}

  if (isProd) {
    build = {
      lib: {
        entry: resolve(__dirname, 'src/FirstWidget.vue'),
        name: 'FirstWidget',
        formats: ['umd'],
        fileName: '[name]'
      },
      rollupOptions: {
        external: ['vue', 'naive-ui'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }

  return {
    plugins: [vue()],
    build: build,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
      ],
    }
  }
})
