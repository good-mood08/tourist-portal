<script setup lang="ts">
const props = defineProps<{
    buttonText: string
}>()
</script>
<template>
    <button class="button-body">
        <p class="text">{{ buttonText }}</p>
    </button>
</template>
<style scoped>
.button-body{
    padding: 5px 25px;
    width: fit-content;
    display: flex;
    border: none;
    border-radius: 20px;
    color: #FFFFFF;
    background-color: #E90729;
    display: inline-flex;
    justify-content: center;
}
.text{
    font-family: 'GroteskWideR';
    font-size: 10px;
}

@media (min-width: 768px) {
    .text{
        font-size: 15px;
    }    
}
</style>