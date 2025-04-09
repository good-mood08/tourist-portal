<script setup lang="ts">
import NumberText from './Text/NumberText.vue';

</script>

<template>
    <div class="active-zone-area">
        <section class="card-body">
            <div class="ooo">
                <TextHeadingText headText="Отгадай Слово"></TextHeadingText>
                <TextSmallText smallText="Угадывайте слова из лексикона Новгородцев, используя цветные подсказки, и получайте бонусы за каждую победу!"></TextSmallText>
            </div>
            <RedButton buttonText="Перейти"></RedButton>
            <!-- <img src="../public/images/warm3.png" class="warm"> -->
        </section>
        <section class="card-body">
            <div>
                
            </div>
            <div class="temperature">
                <p class="temperature-text" >-1</p>
                <p class="temperature-text" >.</p>
            </div>
        </section>
    </div>
</template>

<style scoped>
.temperature{
    display: flex;
    flex-direction: row;
}
.temperature-text{
    font-size: 144px;
    font-family: 'damn';
    line-height:0;
    color: #E90729;
}
.ooo{
    display: flex;
    flex-direction: column;
    width: 80%;
}
.warm{
    width: 100%;
    z-index: 0;
    position: fixed;

}
.active-zone-area{
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 1fr auto;
    gap: 16px;
}
.d{
    width: 70%;
}
    .card-body{
        padding: 22px  25px;
        background-color: #F2F2F2;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
</style>