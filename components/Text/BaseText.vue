<script setup lang="ts">
const props = defineProps<{
    baseText: string
}>()
</script>
<template>
    <div>
        <p class="base-text"></p>
    </div>
</template>

<style scoped>
    .base-text{
        font-family: 'GroteskWideM';
    }
</style>