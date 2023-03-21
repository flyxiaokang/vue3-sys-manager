/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-04-07 14:37:39
 * @LastEditors: kangjinrui
 * @LastEditTime: 2023-03-17 18:15:07
 */

import vue from '@vitejs/plugin-vue'
//unplugin-icons
import Icons from 'unplugin-icons/vite'
// 引入loader
import {
    FileSystemIconLoader
} from 'unplugin-icons/loaders'
// 引入icon自动引入解析器
import IconsResolver from 'unplugin-icons/resolver'
// 引入自动引入插件
import Components from 'unplugin-vue-components/vite'

import {
    resolve
} from "path";

import path from 'path'

import {
    defineConfig,
    loadEnv
} from 'vite'

import {
    visualizer
} from 'rollup-plugin-visualizer'

export default defineConfig(({
    mode
}) => {
    const env = loadEnv(mode, __dirname)
    return {
        base: env.VITE_MODE_NAME === 'development' ? '/local' : '/online',
        plugins: [vue(),
            // 使用自动引入插件
            Components({
                // 配置解析器
                resolvers: [
                    // Icon自动引入解析器
                    IconsResolver({
                        // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
                        prefix: 'icon',
                        alias: {
                            system: 'system-uicons'
                        },
                        // 标识自定义图标集
                        customCollections: ['vc']
                        // enabledCollections:['ic']
                    })
                ]
            }),
            Icons({
                compiler: 'vue3', // 'vue2', 'vue3', 'jsx'
                autoInstall: true,
                customCollections: {
                    // 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
                    vc: FileSystemIconLoader('src/assets/icons/svg', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
                },
            }),
            visualizer()
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false
            //     }
            // })
        ],
        optimizeDeps: {
            // include: ['schart.js']
        },
        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
            },
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
        },
        server: {
            port: '8207',
            // proxy: {
            //     // 字符串简写写法
            //     '/foo': 'http://localhost:4567',
            //     // 选项写法
            //     '/api': {
            //         target: 'http://jsonplaceholder.typicode.com',
            //         changeOrigin: true,
            //         rewrite: (path) => path.replace(/^\/api/, '')
            //     },
            //     // 正则表达式写法
            //     '^/fallback/.*': {
            //         target: 'http://jsonplaceholder.typicode.com',
            //         changeOrigin: true,
            //         rewrite: (path) => path.replace(/^\/fallback/, '')
            //     },
            //     // 使用 proxy 实例
            //     '/api': {
            //         target: 'http://jsonplaceholder.typicode.com',
            //         changeOrigin: true,
            //         configure: (proxy, options) => {
            //             // proxy 是 'http-proxy' 的实例
            //         }
            //     },
            //     // Proxying websockets or socket.io
            //     '/socket.io': {
            //         target: 'ws://localhost:3000',
            //         ws: true
            //     }
            // }
        }
    }
})