<script setup lang="ts">

const props = defineProps<{
    name: string
    adress: string
}>()
</script>
<template>
    <div class="tur-inf-block">
        <TextBaseText :baseText="name" class="name"></TextBaseText>
        <TextSmallText :smallText="adress" class="adress"></TextSmallText>
    </div>
</template>

<style scoped>
.tur-inf-block{
    background-color: #F2F2F2;
    border-radius: 20px;
    padding: 14px 16px;
}
.name{
    font-size: 12px;
}
.adress{
    font-size: 10px;
}
</style>