<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    link: string;
    name: string;
}>();

const id = ref(`#${props.name}`);
</script>
<template>
    <a :href="link" class="link">
        <svg class="icon">
            <use :href="id" />
        </svg>
    </a>
</template>

<style scoped lang="less">
.link {
    &:hover {
        color: @--color-primary;
    }
    .icon {
        width: 100%;
        height: 100%;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
}
</style>
