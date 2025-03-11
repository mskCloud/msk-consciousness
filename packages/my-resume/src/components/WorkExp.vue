<template>
    <div class="p-2 pl-4 pr-4">
        <div class="flex justify-between mb-2 text-14px font-500">
            <span>{{ time }}</span>
            <span>{{ name }}</span>
            <span>{{ job }}</span>
        </div>
        <div class="mb-2">
            <div class="text-14px font-600 mb-2">简介</div>
            <div>
                <slot name="content1"></slot>
            </div>
        </div>
        <div class="mb-2">
            <div class="text-14px font-600 mb-2">工作内容</div>
            <div>
                <slot name="content2"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
const { time, name, job } = defineProps(['time', 'name', 'job'])
</script>

<style lang="scss" scoped></style>
