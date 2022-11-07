<script setup lang="ts">
import * as echarts from 'echarts';
import { unref, ref, onMounted, watch } from 'vue';

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

const charts = ref();

watch(
    () => props.option,
    () => {
        unref(charts)?.setOption(props.option);
    },
    { deep: true }
);

onMounted(() => {
    const chart = echarts.init(unref(charts));
    chart.setOption(props.option);
});
</script>

<template>
    <div ref="charts" :style="{ height, width }"></div>
</template>
