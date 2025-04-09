<script lang="ts">
</script>
<template>
    <div>
        <div class="comp">
            <p class="autobus">Автобус</p>
            <div class="price-number">
                <p class="e">40</p>
                <p class="ee">₽</p>
            </div>
        </div>
    </div>
</template>
<style scoped>

.ee{
    font-family: 'GroteskWideM';
    line-height: 0;
    font-size: 50px;
    display: block;
    color:#FF0125;
}
.e{
    font-family: 'damn';
    font-size: 100px;
    line-height: 0;
    display: block;
    color:#FF0125;
}
.price-number{
    display: flex;
    flex-direction: row;
    gap: 3px;
    justify-content: flex-end;
}
.comp{
    height: 166.67999267578125px;
    width: 100%;
    background-color: #F2F2F2;
    display: flex;
}
.autobus{
    position: relative;
    top: 16px;
    left: 32px;
    font-family: 'Grotesk';
    font-size: 25px;
}
</style>