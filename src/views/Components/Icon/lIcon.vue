<script setup lang="ts">
import { watch, unref, ref } from 'vue';

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

const iconName = ref(props.name);

watch(
    () => props.name,
    val => {
        iconName.value = unref(val);
    }
);
</script>
<template>
    <li class="e-icon">
        <svg
            class="icon"
            :style="`width:${size}px; height:${size}px;color:${color};`"
        >
            <use :href="`#${iconName}`" />
        </svg>
    </li>
</template>

<style scoped lang="less">
.e-icon {
    list-style: none;
    margin: 0 10px 0 2px;

    .icon {
        width: 100%;
        height: 100%;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
}
</style>
