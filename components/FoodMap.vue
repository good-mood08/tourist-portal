<script setup lang="ts">
import {
  YandexMap,
  YandexMapControlButton,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultMarker,
} from 'vue-yandex-maps';
import { shallowRef, ref } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';
import type { LngLat } from '@yandex/ymaps3-types';
import type { YMapLocationRequest } from '@yandex/ymaps3-types/imperative/YMap';

const map = shallowRef<null | YMap>(null);

interface Point {
  tagId: string,
  name: string,
  locations: { 
    id: string,
    title: string,
    lat: number,
    lon: number,
    isGeneral: boolean
  }[]
}

const props = defineProps<{
  points: Point[]
  foodTag: string
}>()

const isFilterFood = ref(false)
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [43.996627, 56.331812],
        zoom: 11,
      },
    }"
    width="100%"
    height="100%"
  >
    <yandex-map-default-scheme-layer/>
    <yandex-map-default-features-layer/>
    
    <template v-for="point in props.points" :key="point.tagId">
      <yandex-map-default-marker
        v-for="location in point.locations"
        v-if="!isFilterFood || point.tagId.includes(props.foodTag)"
        :key="location.id"
        :settings="{
          coordinates: [location.lon, location.lat],
          title: location.title,
          // subtitle можно добавить, если есть соответствующее поле
        }"
      />
    </template>
    
    <yandex-map-controls :settings="{ position: 'left bottom' }">
      <yandex-map-control-button
        :settings="{
          onClick: () => { isFilterFood = !isFilterFood }
        }"
      >
        <div class="button-in-card">
          {{ isFilterFood ? 'Все точки' : 'Нижегородские блюда' }}
        </div>
      </yandex-map-control-button>
    </yandex-map-controls>
  </yandex-map>
</template>

<style scoped>
.button-in-card {
  padding: 8px 12px;
  background: white;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
}
</style>