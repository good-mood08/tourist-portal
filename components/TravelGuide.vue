<script setup lang="ts">

async function costs() {
  const { find } = useStrapi()
  const response = await find('costs', {
    populate: '*'
  })
  const data = response.data.map((cost:any) => ({
    type: cost.type,
    cost: cost.cost
    
  }))
  return data
}
const transport = await costs()

</script>

<template>
  <div class="guide-area-full">
    <div class="guide-area">
        <h1>Где поесть</h1>
        <BlockZ class="map">
          <FoodMap :points="points" food-tag="t1" "/>
          
            <!-- <MenuButton buttonText="Национальные блюда" class="food-filt">

            </MenuButton> -->
        </BlockZ>
    </div>
    <div class="guide-area">
        <h1>Тарифы транспорта</h1>

        <div v-for="i in transport">
          <PriceBlock :price="i.cost" :transport="i.type"></PriceBlock>
        </div>
    
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
    height: 500px;
    width: 100%;
}
.food-filt{
    position: relative;
    top: 80%;
    left: 3%;
    font-size: 10px;
}



@media (min-width: 768px) {
  .tarif{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 88px;
  }
}
</style>