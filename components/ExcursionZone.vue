<script setup lang="ts">
const props = defineProps<{
}>()
</script>
<template>
    <div class="excursion-zone">
        <h1>Экскурсии</h1>
        <div class="excursions">
            <div>
                
            </div>
            <div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.excursion-zone{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.excursions{
    grid-template-columns: repeat(2,1fr);
    gap: 16px;
}
</style>