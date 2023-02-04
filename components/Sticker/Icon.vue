<script setup lang="ts">

const item:any = inject('stickersProvideData');

const loadingSticker:any = inject('loadingStickersProvideData');


</script>



<template>
    <template v-if="loadingSticker">
        <div class="animate-pulse hover:bg-green-400 bg-gray-300 rounded-md flex-none lg:w-60 lg:h-60 md:w-50 md:h-50 h-40 w-40
            object-cover"></div>
    </template>
    <template v-else>
        <template v-if="item.data.stickers.length >= 2 || item.status === 200">
            <img class="rounded-md flex-none lg:w-60 lg:h-60 md:w-50 md:h-50 h-40 w-40 object-cover" :src="item.data.icon"
                alt="">
        </template>
    </template>


</template>


