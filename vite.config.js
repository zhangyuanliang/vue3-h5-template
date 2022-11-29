import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_PUBLIC_PATH,
    server: {
      host: '0.0.0.0',
      hmr: true,
      port: parseInt(loadEnv(mode, process.cwd()).VITE_PORT),
      open: true,
      proxy: {
        '/dev_api/': {
          // target: 'http://10.68.12.162:8190', // 陈建
          target: 'http://10.67.78.91:8190', // 开发环境
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev_api/, '')
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue', 'pinia', 'vue-router'],
        dts: true
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
        symbolId: 'icon-[dir]-[name]'
      }),
      Components({
        resolvers: [VantResolver()]
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: loadEnv(mode, process.cwd()).VITE_PROJECT_NAME
          }
        }
      }),
      viteMockServe({
        supportTs: true,
        mockPath: 'mock',
        localEnabled: command === 'serve' && loadEnv(mode, process.cwd()).VITE_OPEN_MOCK !== 'false',
        prodEnabled: loadEnv(mode, process.cwd()).VITE_OPEN_MOCK,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
        logger: true
      })
    ],
    build: {
      target: 'es2015',
      outDir: './dist',
      minify: 'terser',
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 5000,
      terserOptions: {
        //detail to look https://terser.org/docs/api-reference#compress-options
        compress: {
          drop_console: false,
          pure_funcs: ['console.log', 'console.info'],
          drop_debugger: true
        }
      },
      assetsDir: 'static/assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
})
