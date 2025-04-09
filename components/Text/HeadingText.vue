<script setup lang="ts">
const props = defineProps<{
    headText: string
}>()
</script>
<template>
    <div>
        <p class="headText"> {{ headText }}</p>
    </div>
</template>

<style scoped>
.headText{
    font-family: 'Grotesk';
}
</style>