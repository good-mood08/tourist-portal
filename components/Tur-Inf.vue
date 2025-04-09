<script setup lang="ts">
const props = defineProps<{}>()
</script>
<template>
    <div class="tur-inf-area">
        <h1>Туристко-Информационные центры</h1>
        <div class="tur-inf-blocks">
            <TurInfBlock name="jhjhjjjh" adress="yyyyyy"></TurInfBlock>
            <TurInfBlock name="jhjhjjjh" adress="yyyyyy"></TurInfBlock>
            <TurInfBlock name="jhjhjjjh" adress="yyyyyy"></TurInfBlock>
        </div>
    </div>
</template>

<style scoped>
.tur-inf-area{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.tur-inf-blocks{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>