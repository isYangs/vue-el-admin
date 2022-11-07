<script setup lang="ts">
import A from './Icon/AIcon.vue';
import L from './Icon/lIcon.vue';
defineProps({
    type: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <component :is="type ? A : L" />
</template>
