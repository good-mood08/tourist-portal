<script setup lang="ts">
import BaseText from './Text/BaseText.vue';

const props = defineProps<{
    title: string
    description: string
    src: string
}>()
</script>

<template>

    <div style="border: 1px solid black; border-radius: 20px;">
        <h1>{{ title }}</h1>
        <TextBaseText :baseText="description" class="name"></TextBaseText>
        <img :src="src" alt="">
    </div>
</template>