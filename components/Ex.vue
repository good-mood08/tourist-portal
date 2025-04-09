<script setup lang="ts">
const props = defineProps<{
    name: string
}>()
</script>

<template>
  <div class="area">
    <p class="ex-name">{{name}}</p>
    <!-- <img src="https://image.winudf.com/v2/image/bW9iaS5hbmRyb2FwcC5wcm9zcGVyaXR5YXBwcy5jNTExMV9zY3JlZW5fN18xNTI0MDQxMDUwXzAyMQ/screen-7.jpg?fakeurl=1&type=.jpg"> -->
  </div>
</template>

<style scoped>
.area{
  background-color: aquamarine;
  padding: 8px;
  width: 100%;
  border-radius: 13px;
  display: flex;
  align-items: flex-end;
}
.ex-name{
    font-family: 'Grotesk';
    font-size: 13px;
    word-break: break-all;
}
</style>