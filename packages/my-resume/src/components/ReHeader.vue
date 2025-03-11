<template>
    <ul class="flex flex-wrap p-4">
        <li class="w-33%" v-for="item in list" :key="item.label">
            <span class="font-500 mr-2"> {{ item.label }} </span>
            <span class="text-3">{{ item.value }}</span>
        </li>
    </ul>
</template>

<script setup>
const list = [
    { label: '性别', value: '男' },
    { label: '年龄', value: '26' },
    { label: '经验', value: '三年' },
    { label: '电话', value: '13277984693' },
    { label: '邮箱', value: '1580231853@qq.com' },
    { label: '学校', value: '江汉大学' },
    { label: '时间', value: '2017.7-2021.7' },
    { label: '专业', value: '数字媒体技术' },
    { label: '类别', value: '工科、计算机类' },
    { label: '学历', value: '本科（全日制）' },
    { label: '岗位', value: '前端开发工程师' },
    { label: '状态', value: '在职' },
    { label: '期望薪资', value: '面议' },
    { label: '到岗时间', value: '面议' },
]
</script>

<style lang="scss" scoped></style>
