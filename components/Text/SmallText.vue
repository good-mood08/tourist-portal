<script setup lang="ts">
const props = defineProps<{
    smallText: string
}>()
</script>
<template>
    <div>
        <p class="smallText"> {{ smallText }}</p>
    </div>
</template>

<style scoped>
.smallText{
    font-family: 'GroteskWideR';
    font-size: 10px;
}
</style>