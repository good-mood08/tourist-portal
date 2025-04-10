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
            <img src="../public/images/warm44.png" class="warm">
        </section>
        <section class="card-body2">
            <div>
                <TextSmallText smallText="Сейчас" class="grey-text"></TextSmallText>
                <TextHeadingText headText="Нижний Новгород"></TextHeadingText>
                <div class="h-flex">
                    <TextSmallText smallText="🌅 6:05" class="grey-text"></TextSmallText>
                    <TextSmallText smallText="🌇 20:04" class="grey-text"></TextSmallText>
                </div>
            </div>
            <div class="temperature">
                <TextNumberText number-text="-10"  class="temperature-text"></TextNumberText>
                <TextNumberText number-text="."  class="temperature-text2"></TextNumberText>
            </div>
        </section>
    </div>
</template>

<style scoped>
.h-flex{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.temperature{
    display: flex;
    flex-direction: row;
    justify-content: flex-end
}
.temperature-text{
    font-size: 144px;
}
.grey-text{
    color: #A9A9A9;
}
.temperature-text2{
    font-size: 144px;
    margin-top: 0px;
    line-height: 0;
    position: relative;
    top: -20%;
}
.ooo{
    display: flex;
    flex-direction: column;
    width: 80%;
}
.warm{
    aspect-ratio: 1;
    display: block;
    width: 100%;
    position: absolute;
    z-index: -1;
    top: -90%;
    left: 40%;

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
    isolation: isolate;
    overflow: hidden;
    position: relative;
}

.card-body2{
    padding: 16px 0px 0px 18px;
    background-color: #F2F2F2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    isolation: isolate;
    position: relative;
}

@media (min-width: 768px) {
    .active-zone-area{
        display: grid;
        grid-template-columns: 2fr 3fr;
    }
    
}
</style>