<script setup lang="ts">
import type { describe } from 'node:test';

const props = defineProps<{}>()
async function centrs() {
  const { find } = useStrapi()
  const response = await find('centrs', {
    populate: '*'
  })
  const data = response.data.map((centr:any) => ({
    adress: centr.adress,
    description: centr.description
    
  }))
  return data
}
const filials = await centrs()
</script>
<template>
    <div class="tur-inf-area">
        <h1>Туристко-Информационные центры</h1>
        <div class="tur-inf-blocks" v-for="i in filials">
            <TurInfBlock :name="i.description" :adress="i.adress"></TurInfBlock>
        </div>
    </div>
</template>

<style scoped>
.tur-inf-area{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.tur-inf-blocks{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>