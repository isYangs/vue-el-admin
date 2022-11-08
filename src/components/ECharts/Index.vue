<script setup lang="ts">
import * as echarts from 'echarts';
import { computed, unref, ref, onMounted, watch } from 'vue';
import { useAppStore } from '@/store';

const appStore = useAppStore();

// 是否为移动端
const isMobile = computed(() => {
    return appStore.getMobile;
});

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
});

const Echarts = ref();
const chart = ref();

const initChart = () => {
    chart.value = echarts.init(unref(Echarts));
    unref(chart).setOption(unref(props.option));
    window.addEventListener('resize', () => {
        unref(chart).resize();
    });
};

watch(
    () => props.option,
    () => {
        unref(chart).setOption(unref(props.option));
    },
    { deep: true }
);

onMounted(() => {
    initChart();
});
</script>

<template>
    <div ref="Echarts" :style="{ height, width }"></div>
</template>
