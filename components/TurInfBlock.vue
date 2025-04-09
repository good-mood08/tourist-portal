<script setup lang="ts">

const props = defineProps<{
    name: string
    adress: string
}>()
</script>
<template>
    <BlockZ class="tur-inf-block">
        <TextBaseText :baseText="name" class="name"></TextBaseText>
        <TextSmallText :smallText="adress" class="adress"></TextSmallText>
    </BlockZ>
        
</template>

<style scoped>
.tur-inf-block{
    padding: 14px 16px;
}
.name{
    font-size: 12px;
}
.adress{
    font-size: 10px;
}
</style>