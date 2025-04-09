<script setup lang="ts">
const props = defineProps<{
    smallText: string
}>()
</script>
<template>
        <p class="smallText"> {{ smallText }}</p>
</template>

<style scoped>
.smallText{
    font-family: 'GroteskWideR';
    font-size: 10px;
}
</style>