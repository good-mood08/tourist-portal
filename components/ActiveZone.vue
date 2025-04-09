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
            <div>
                <NumberText class="rr" numberText="-1"/>
                <NumberText numberText="."/>
            </div>
        </section>
    </div>
</template>

<style scoped>

.rr{
    font-size: 144px;
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
    background-color: aquamarine;
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