<script setup lang="ts">

const stickersInfo = inject('stickersInfoProvideData');
const stickersStatus = inject('stickersStatusProvideData');

const loadingSticker = inject('loadingStickersProvideData');
const lengthSticker = inject('lengthStickersProvideData')


</script>



<template>
    <template v-if="loadingSticker()">
        <button flex-1 text-lg py-5 text-white cursor-pointer font-semibold animate-pulse hover:bg-green-400 bg-gray-300
            border-none rounded-3xl>

        </button>
        <button flex-1 text-lg py-5 text-white cursor-pointer font-semibold animate-pulse hover:bg-green-400 bg-gray-300
            border-none rounded-3xl>
        </button>
    </template>
    <template v-else>
        <template v-if="lengthSticker() >= 2 || stickersStatus().status === 200">
            <button flex-1 lg:text-lg md:text-lg sm:text-md text-base py-2 px-3 text-white hover:bg-green-400
                cursor-pointer font-semibold bg-green-500 border-none rounded-3xl>
                Download
            </button>
            <a :href="stickersInfo().url" no-underline lg:text-xl md:text-xl sm:text-lg text-md flex-1 py-2 px-3
                text-white hover:bg-green-400 cursor-pointer font-semibold font-sans text-center bg-green-500
                border-none rounded-3xl>
                Store
            </a>

        </template>

    </template>


</template>


