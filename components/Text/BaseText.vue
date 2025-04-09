<script setup lang="ts">
const props = defineProps<{
    baseText: string
}>()
</script>
<template>
        <p class="baseText"> {{ baseText }}</p>
</template>

<style scoped>
.baseText{
    font-family: 'GroteskWideM';
}
</style>