<template>
    <div class="w-full mb-2">
        <div class="font-400 text-xl p-2">
            {{ label }}
        </div>
        <div class="h-2px bg-black w-full"></div>
    </div>
</template>

<script setup>
const { label } = defineProps(['label'])
</script>

<style lang="scss" scoped></style>
