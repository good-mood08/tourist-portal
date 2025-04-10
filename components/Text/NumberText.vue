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
    line-height: 0.51;
    margin-top: 30px;
}

@media (min-width: 768px) {
    .numberText{
        font-size: 400px;
    }    
}
</style>