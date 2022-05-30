<script setup lang="ts">

const stickersInfo = inject('stickersInfoProvideData');
const stickersStatus = inject('stickersStatusProvideData');

const loadingSticker = inject('loadingStickersProvideData');
const lengthSticker = inject('lengthStickersProvideData')


</script>



<template>
    <template v-if="loadingSticker()">
        <div animate-pulse hover:bg-green-400 rounded-3xl lg:mt-0 md:mt-0 mt-3 lg:block md:block inline-flex
            justify-center lg:w-80 lg:h-11 md:w-80 md:h-11 w-50 h-8 bg-gray-300>
        </div>
    </template>
    <template v-else>
        <template v-if="lengthSticker() >= 2 || stickersStatus().status === 200">

            <span v-text="stickersInfo().title.replace('- Stiker LINE | LINE STORE', '')" lg:mt-0 md:mt-0 mt-3
                lg:text-5xl md:text-5xl text-3xl font-bold>

            </span>
        </template>
    </template>


</template>


