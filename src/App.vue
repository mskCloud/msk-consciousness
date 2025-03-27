<template>
    <div>
        <header>
            <div @click="toProject(1)">项目一</div>
            <div @click="toProject(2)">项目二</div>
        </header>
        <div id="sub-app"></div>
    </div>
</template>

<script setup lang="ts">
import { startApp } from 'wujie'
import { bankConfig, grimoireConfig } from './stores'
const toProject = (type: number) => {
    if (type === 1) {
        startApp(bankConfig)
    } else {
        startApp(grimoireConfig)
    }
}
</script>

<style scoped>
header {
    height: 4rem;
    background-color: antiquewhite;
    > div {
        cursor: pointer;
    }
}
</style>
