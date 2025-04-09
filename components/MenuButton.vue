<script setup lang="ts">
const props = defineProps<{
    buttonText: string
}>()
</script>
<template>
    <div>
        <button class="button-body">
            <TextBaseText :baseText="buttonText"></TextBaseText>
        </button>
    </div>
</template>
<style scoped>
.button-body{
    padding: 5px 25px;
    border: none;
    border-radius: 20px;
    background-color: #D9D9D9;
}
</style>