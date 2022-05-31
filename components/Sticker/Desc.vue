<script setup lang="ts">

const stickersStatus = inject('stickersStatusProvideData');

const loadingSticker =  inject('loadingStickersProvideData');
const lengthSticker = inject('lengthStickersProvideData')
const stickersInfo = inject('stickersInfoProvideData');
</script>



<template>
    <template v-if="loadingSticker()">
        <p space-y-2>
        <div animate-pulse hover:bg-green-400 rounded-3xl lg:w-98 md:w-96 w-60 h-4 bg-gray-300>

        </div>
        <div animate-pulse hover:bg-green-400 rounded-3xl lg:w-75 md:w-75 w-30 h-4 bg-gray-300>

        </div>
        <div animate-pulse hover:bg-green-400 rounded-3xl lg:w-85 md:w-75 w-50 h-4 bg-gray-300>

        </div>
        <div animate-pulse hover:bg-green-400 rounded-3xl lg:w-70 md:w-70 w-47 h-4 bg-gray-300>

        </div>

        </p>
    </template>
    <template v-else>
        <template v-if="lengthSticker() >= 2 || stickersStatus().status === 200">
            <p v-text="stickersInfo().desc"
            lg:text-lg md:text-lg text-base text-justify text-gray-600>
               
            </p>
        </template>

    </template>


</template>


