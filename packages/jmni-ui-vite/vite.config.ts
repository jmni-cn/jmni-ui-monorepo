/// <reference types="vitest" />

import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
import { UserConfig } from "vitest";
import dts from "vite-plugin-dts";


const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
        assetFileNames: `assets/style.css`,
    },
};
export const config = {
    plugins: [
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        Unocss(),
        dts({
            outputDir: "./dist/types",
            insertTypesEntry: false, // 插入TS 入口
            copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
        }),
    ],
    test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom',
        // environment: "jsdom",
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        },
        coverage: {
            provider: "istanbul", // or 'c8',
            reporter: ["text", "json", "html"],
        },
    },
    build: {
        rollupOptions,
        minify: 'terser', // boolean | 'terser' | 'esbuild'
        sourcemap: true, // 输出单独 source文件
        reportCompressedSize: true,  // 生成压缩大小报告
        cssCodeSplit: true,
        lib: {
            entry: "./src/entry.ts",
            name: "JmniUI",
            fileName: "jmni-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
        outDir: 'dist'
    },

}
export default defineConfig(config);