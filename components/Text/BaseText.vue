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

@media (min-width: 768px) {
    .baseText{
        font-size: 20px;
    }
}
</style>