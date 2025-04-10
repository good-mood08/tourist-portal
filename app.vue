<script setup lang="ts">


async function locations() {
  const { find } = useStrapi()

  const response = await find('locations', {
    populate: '*'
  })
  const data = response.data.map((location:any) => ({
    id: location.documentId,
    title: location.title,
    description: location.description,
    lat: location.lat,
    lon: location.lon,
    isGeneral: location.isGeneral,
    url:`http://localhost:1337${location.images[0].url}`
  }))
  return data
}

const location = await locations()
</script>

<template>
  <div class="area">
    <div class="head">
      <TheHeader></TheHeader>
    <ActiveZone></ActiveZone>
    </div>
    <Sightseeing></Sightseeing>
    <ExcursionZone></ExcursionZone>
    <TurInf></TurInf>
    <EventsZone></EventsZone>
    <TravelGuide></TravelGuide>
  </div>
  <!-- {{ location }} -->
  <div v-for="i in location">

    <Location :title="i.title" :description="i.description" :src="i.url"/>
  </div>
</template>

<style scoped>
.area{
  padding: 62px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}
.head{
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
<script lang="ts">
import { EventsDatePicker } from '#components';
import Calendar from './components/Calendar.vue';




</script>