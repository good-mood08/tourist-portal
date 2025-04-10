<script setup lang="ts">
//  defineProps<{startdate: Date, finaldate: Date}>()
//  function calcDate(date1: Date, date2: Date) {
//         var diff = Math.floor(date1.getTime() - date2.getTime());
//         var day = 1000 * 60 * 60 * 24;
//         var days = Math.floor(diff/day);
//         var months = Math.floor(days/31);
//         var years = Math.floor(months/12);
//         var message = date2.toDateString();
//         message += " was "
//         message += days + " days "
//         message += months + " months "
//         message += years + " years ago \n"
//         return message
//         }
//         function getDaysBetweenDates(date1: Date, date2:Date) {

//   const time1 = new Date(date1).getTime()
//   const time2 = new Date(date2).getTime()
//   const timeDiff = Math.abs(time2 - time1)
//   const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)-30)
  
//   return daysDiff;
// }
import { diffDays, dayStart } from "@formkit/tempo"


const a = diffDays(
    dayStart(new Date(2025,4,1)),
    dayStart(new Date()),
    "floor"
)


</script>
<template>
    <div>
        <!-- {{ calcDate(finaldate, startdate) }} -->
        {{ a }}
    </div>
</template>