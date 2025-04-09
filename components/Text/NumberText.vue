<script setup lang="ts">
const props = defineProps<{
    numberText: string
}>()
</script>
<template>
    <div>
        <p class="numberText"> {{ numberText }}</p>
    </div>
</template>

<style scoped>
.numberText{
    font-family: 'damn';
    line-height:0;
    color: #E90729;
}
</style>