<script setup lang="ts">

</script>

<template>
  <div class="guide-area-full">
    <div class="guide-area">
        <h1>Где поесть</h1>
        <BlockZ class="map"></BlockZ>
    </div>
    <div class="guide-area">
        <h1>Тарифы транспорта</h1>
        <PriceBlock price="35" transport="Автобус"></PriceBlock>
        <PriceBlock price="35" transport="Метро"></PriceBlock>
        <PriceBlock price="35" transport="Водный"></PriceBlock>
    </div>
    
  </div>
</template>

<style scoped>
.guide-area-full{
  display: flex;
  flex-direction: column;
  gap: 64px;
}
.guide-area{
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.map{
    height: 200px;
    width: 100%;
}
</style>