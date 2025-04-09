<!-- <template>
  <div>
    <p class="font-(family-name:Grotesk) text-[14px]">d,nsjfhjke</p>
    <p class="fo">d,nsjfhjke</p>
    <p class="fo1">d,nsjfhjke</p>
    <p class="fo2">d,nsjfhjke</p>
  </div>
</template>

<style>
.fo {
  font-family: 'Grotesk';
}
.fo1 {
  font-family: 'GroteskWideM';
}
.fo2 {
  font-family: 'GroteskWideR';
}
</style> -->
<script lang="ts">
import { PriceBlock } from '#components';


</script>
<template>
  <div>
    <MoveText></MoveText>
    <div class="q">
        <PriceBlock></PriceBlock>
        <PriceBlock></PriceBlock>
        <PriceBlock></PriceBlock>
        <PriceBlock></PriceBlock>
        <PriceBlock></PriceBlock>
        <PriceBlock></PriceBlock>
    </div>
  </div>
</template>
<style scoped>
.q{
    display: flex;
    gap: 16px;
    flex-direction: column;

}
</style>