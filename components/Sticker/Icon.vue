<script setup lang="ts">

const stickersInfo:any = inject('stickersInfoProvideData');
const stickersStatus:any = inject('stickersStatusProvideData');

const loadingSticker:any = inject('loadingStickersProvideData');
const lengthSticker:any = inject('lengthStickersProvideData')


</script>



<template>
    <template v-if="loadingSticker">
        <div animate-pulse hover:bg-green-400 bg-gray-300 rounded-md flex-none lg:w-60 lg:h-60 md:w-50 md:h-50 h-40 w-40
            object-cover></div>
    </template>
    <template v-else>
        <template v-if="lengthSticker >= 2 || stickersStatus.status === 200">
            <img rounded-md flex-none lg:w-60 lg:h-60 md:w-50 md:h-50 h-40 w-40 object-cover :src="stickersInfo.icon"
                alt="">
        </template>
    </template>


</template>


