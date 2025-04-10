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
  latitude: number
  longitude: number
  tags: string[]
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
    
    <yandex-map-default-marker
      v-for="point in props.points.filter(point => {
        if (!isFilterFood) {
          return true
        }
        return point.tags.includes(props.foodTag)
      })"
      :key="`${point.latitude}-${point.longitude}`"
      :settings="{
        coordinates: [point.longitude, point.latitude],
        title: point.title,
        subtitle: point.description,
        

      }"
    />
    
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
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
}
</style>