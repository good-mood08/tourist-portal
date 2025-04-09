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
}
.price-p{
    font-size: 144px;
}
.ruble-mark{
    color: #FF0125;
    
}
.price-inf{
    display: flex;
    flex-direction: row;
}
</style>