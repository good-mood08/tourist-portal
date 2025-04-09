<script setup lang="ts">
const props = defineProps<{
    transport: string
    price: string
}>()
</script>

<template>
  <BlockZ class="price-area">
    <TextBaseText :baseText="transport"></TextBaseText>
    <div class="price-inf">
        <TextNumberText :numberText="price" class="price-p"></TextNumberText>
        <p class="ruble-mark">₽</p>
    </div>
    
  </BlockZ>
</template>

<style scoped>
.price-area{
    padding: 14px 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.price-p{
    font-size: 144px;
}
.ruble-mark{
    color: #FF0125;
    font-family: 'GroteskWideB';
    font-size: 46px;
    line-height: 0.63;
}
.price-inf{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    margin-bottom: -14px;

}
</style>