<script setup lang="ts">
const props = defineProps<{
    numberText: string
}>()
</script>
<template>
        <p class="numberText"> {{ numberText }}</p>
</template>

<style scoped>
.numberText{
    font-family: 'damn';
    color: #E90729;
}
</style>