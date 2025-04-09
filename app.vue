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
import { EventsDatePicker } from '#components';
import Calendar from './components/Calendar.vue';




</script>
<template>
  <div>
      <EventsDatePicker :startdate="new Date()" :finaldate="new Date(2025, 4, 19)"></EventsDatePicker>
  </div>
</template>