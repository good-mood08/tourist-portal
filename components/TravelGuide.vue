<script setup lang="ts">

</script>

<template>
  <div class="guide-area-full">
    <div class="guide-area">
        <h1>Где поесть</h1>
        <BlockZ class="map">
            <MenuButton buttonText="Национальные блюда" class="food-filt"></MenuButton>
        </BlockZ>
    </div>
    <div class="guide-area">
        <h1>Тарифы транспорта</h1>
        <PriceBlock price="135" transport="Автобус"></PriceBlock>
        <PriceBlock price="35" transport="Метро"></PriceBlock>
        <PriceBlock price="95" transport="Водный"></PriceBlock>
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
.food-filt{
    position: relative;
    top: 80%;
    left: 3%;
    font-size: 10px;
}
</style>