<template>
    <ol class="list-decimal-outside pl-10">
        <li v-for="item in list" :key="item">
            {{ item }}
        </li>
    </ol>
</template>

<script setup>
const list = [
    '熟悉HTML、CSS，掌握常见布局、web响应式设计、主题设计等设计方案',
    '熟练使用iView，ElementUI，Naive-ui，Ant	Design等第三方UI库',
    '熟练使用sass、less预处理器以及Tailwind	CSS原子化css方案',
    '熟悉JavaScript，以及其ES6+规范特性，能熟练使用Typescript',
    '熟悉Vue2/3，熟悉Vue2与3的差异以及原理，如响应式系统设计、渲染器等等',
    '熟练使用Vue-Router、Vuex、Pinia、VueUse等vue官方工具以及第三方库',
    '能使用react以及常见相关库开发',
    '熟练使用Git管理工具',
    '了解Webpack、Vite构建工具的常用配置',
    '了解ECharts、D3.js可视化库的使用',
    '了解NodeJs、java后端开发',
]
</script>

<style lang="scss" scoped></style>
