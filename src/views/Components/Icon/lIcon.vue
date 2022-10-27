<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        default: 24,
    },
    color: {
        type: String,
        default: '#fff',
    },
});

const id = ref(`#${props.name}`);
</script>
<template>
    <li class="el-icon">
        <svg
            class="icon"
            :style="`width:${size}px; height:${size}px;color:${color};`"
        >
            <use :href="id" />
        </svg>
    </li>
</template>

<style scoped lang="less">
.el-icon {
    list-style: none;

    .icon {
        width: 100%;
        height: 100%;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
}
</style>
