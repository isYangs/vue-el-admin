<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        default: '',
    },
    size: {
        type: Number,
        default: 32,
    },
    color: {
        type: String,
        default: 'rgba(0, 0, 0, 0.4)',
    },
});

const id = ref(`#${props.name}`);
</script>
<template>
    <a :href="link" class="link">
        <svg class="icon" :style="`width:${size}px; height:${size}px;`">
            <use :href="id" :style="`color:${color};`" />
        </svg>
    </a>
</template>

<style scoped lang="less">
.link {
    &:hover {
        color: @--color-primary;
    }
    .icon {
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
}
</style>
