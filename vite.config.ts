/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";
// https://vitejs.dev/config/
const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
        assetFileNames: `assets/[name].css`,
    },
};
export default defineConfig({
    plugins: [
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        Unocss()
    ],
    test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom',
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        }
    },
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "SmartyUI",
            fileName: "smarty-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
        cssCodeSplit: true,
    },

});