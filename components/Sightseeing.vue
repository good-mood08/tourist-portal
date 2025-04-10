<template>
    <div class="sightseeing">
        <h1>Достопримечательности</h1>
        <BlockZ class="map">
            <RouteMap />
        </BlockZ>
    </div>
</template>
<style scoped>
.sightseeing{
    display: flex;
    flex-direction: column;
    gap: 16px;
    /* aspect-ratio:1; */
    border-radius: 20px;

}
.map{
    width: 100%;
    height: auto;
    /* aspect-ratio:0.5; */
    object-fit: cover;
    overflow: hidden;
}
</style>