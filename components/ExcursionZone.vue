<script setup lang="ts">
const props = defineProps<{
}>()
</script>
<template>
    <div class="excursion-zone">
        <h1>Экскурсии</h1>
        <div class="excursions">
            <div class="form">
                <TextHeadingText headText="mkmk"/>
                <h3 class="">Подбери себе свой маршрут!</h3>
                <p>Нужно ответить на пару вопросиков 😄</p>
                <RedButton buttonText="Давайте!"></RedButton>
            </div>
            <div class="list">
                <Ex />
                <Ex />
                <Ex />
            </div>
        </div>
    </div>
</template>
<style scoped>
.list{
    display: flex;
    flex-direction: row;
    gap: 16px;
}
.excursion-zone{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.excursions{
    display: grid;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: 1fr;
    gap: 16px;
}

.form{
    background-color: #F2F2F2;
    border-radius: 20px;
    width: 100%;
    padding: 15px 18px;
}
</style>