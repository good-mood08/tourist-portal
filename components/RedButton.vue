<script setup lang="ts">
const props = defineProps<{
    buttonText: string
}>()
</script>
<template>
    <div>
        <button class="button-body">
            <p class="text">{{ buttonText }}</p>
        </button>
    </div>
</template>
<style scoped>
.button-body{
    padding: 5px 25px;
    border: none;
    border-radius: 20px;
    color: #FFFFFF;
    background-color: #E90729;
}
.text{
    font-family: 'GroteskWideR';
    font-size: 10px;
}
</style>