<script setup lang="ts">
import * as echarts from 'echarts';
import { shallowRef, unref, ref, onMounted, watch } from 'vue';
import { useWindowSize } from '@vueuse/core';

const windowSize = useWindowSize();

const props = defineProps({
    option: {
        type: Object,
        required: true,
    },
    width: {
        type: String,
        default: '100%',
    },
    height: {
        type: String,
        default: '350px',
    },
    page: {
        type: Object,
        required: true,
    },
});

const Echarts = ref();
const chart = shallowRef();

const initChart = () => {
    chart.value = echarts.init(unref(Echarts));
    unref(chart).setOption(unref(props.option));
};

watch(
    () => props.option,
    () => {
        unref(chart).setOption(unref(props.option));
    },
    { deep: true }
);

watch(
    () => unref(windowSize.width),
    () => {
        unref(chart).resize();
    }
);

onMounted(() => {
    initChart();
});
</script>

<template>
    <div ref="Echarts" :style="{ height, width }"></div>
</template>
