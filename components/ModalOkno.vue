<script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from 'reka-ui'

</script>

<template>
<div class="qwqw">
 <div>
  <AlertDialogRoot>
    <AlertDialogTrigger
      class="trigger"
    >
      нажми на меня
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay class="overlay" />
      <AlertDialogContent
        class=""
      >
        <AlertDialogTitle class="">
          спасибо
        </AlertDialogTitle>
        <AlertDialogDescription class="">
          !
        </AlertDialogDescription>
        <div class="">
          <AlertDialogCancel
            class=""
          >
            закрть
          </AlertDialogCancel>
            
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</div>
  </div>
</template>
<style scoped>
.qwqw{
    background-color: black;
    border-color: blueviolet;
}
.trigger{
    background-color: white;
    color:green;
    border-radius: 75rem;  
}
.overlay{
    animation-duration: 1s;
}
</style>