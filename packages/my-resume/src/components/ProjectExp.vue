<template>
    <div class="p-2 pl-4 pr-4">
        <div class="flex items-center justify-between mb-2 text-14px font-500">
            <div>
                <span
                    class="inline-block text-center font-700 pl-2 pr-2 w-3rem mr-2 border-3 border-solid border-blue"
                >
                    {{ index }}
                </span>
                <span>{{ time }}</span>
            </div>
            <span>{{ name }}</span>
            <!-- <span>{{ job }}</span> -->
        </div>
        <div class="mb-2 flex items-center">
            <span class="text-14px font-600 mr-2">前端技术栈</span>
            <ul class="flex flex-wrap">
                <li
                    class="pt-1 pb-1 pl-2 pr-2 bg-gray-300 text-rose-6 mr-2 rounded-sm"
                    v-for="tag in tags"
                    :key="tag"
                >
                    {{ tag }}
                </li>
            </ul>
        </div>
        <div class="mb-2">
            <div class="text-14px font-600 mb-2">项目简述</div>
            <div>
                <slot name="content1"></slot>
            </div>
        </div>
        <div class="mb-2">
            <div class="text-14px font-600 mb-2">个人职责</div>
            <div>
                <slot name="content2"></slot>
            </div>
        </div>
        <div v-if="show3" class="mb-2">
            <div class="text-14px font-600 mb-2">难点问题</div>
            <div>
                <slot name="content3"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
const {
    time,
    name,
    job,
    tags = [],
    show3 = false,
    index = 0,
} = defineProps(['time', 'name', 'job', 'tags', 'show3', 'index'])
</script>

<style lang="scss" scoped></style>
