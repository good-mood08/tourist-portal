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

@media (min-width: 768px) {
    .headText{
        font-size: 40px;
    }
}
</style>