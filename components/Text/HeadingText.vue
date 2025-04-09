<script setup lang="ts">
const props = defineProps<{
    headText: string
}>()
</script>
<template>
    <p class="headText"> {{ headText }}</p>
</template>

<style scoped>
.headText{
    font-family: 'Grotesk';
}
</style>