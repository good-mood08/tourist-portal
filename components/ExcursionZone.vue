<script setup lang="ts">
const props = defineProps<{
}>()
</script>
<template>
    <div class="excursion-zone">
        <h1>Экскурсии</h1>
        <div class="excursions">
            <div class="form">
                <div class="d-flex">
                    <TextHeadingText headText="Подбери себе свой маршрут!" />
                    <TextSmallText smallText="Нужно ответить на пару вопросиков 😄" class="grey-text"></TextSmallText> 
                </div>
                
                <RedButton buttonText="Давайте!" class="strech-button"></RedButton>
            </div>
            <div class="list">
                <Ex name="hhh"/>
                <Ex name="hhh"/>
                <Ex name="hhh"/>
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
.strech-button{
    width: 100%;
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
.d-flex{
    display: flex;
    flex-direction: column;
    gap: 1  px;
}

.form{
    background-color: #F2F2F2;
    border-radius: 20px;
    width: 100%;
    padding: 15px 18px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.grey-text{
    color: #A9A9A9;
}
</style>