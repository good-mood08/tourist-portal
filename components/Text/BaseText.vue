<script setup lang="ts">
const props = defineProps<{
    baseText: string
}>()
</script>
<template>
    <div>
        <p class="baseText"> {{ baseText }}</p>
    </div>
</template>

<style scoped>
.baseText{
    font-family: 'GroteskWideM'
}
</style>