<script setup lang="ts">

const stickers: any = inject('stickersProvideData');

const loadingSticker: any = inject('loadingStickersProvideData');
</script>



<template>
    <template v-if="loadingSticker">
        <p space-y-2>
        <div class="animate-pulse hover:bg-green-400 rounded-3xl lg:w-98 md:w-96 w-60 h-4 bg-gray-300">

        </div>
        <div class="animate-pulse hover:bg-green-400 rounded-3xl lg:w-75 md:w-75 w-30 h-4 bg-gray-300">

        </div>
        <div class="animate-pulse hover:bg-green-400 rounded-3xl lg:w-85 md:w-75 w-50 h-4 bg-gray-300">

        </div>
        <div class="animate-pulse hover:bg-green-400 rounded-3xl lg:w-70 md:w-70 w-47 h-4 bg-gray-300">

        </div>

        </p>
    </template>
    <template v-else>
        <template v-if="stickers.data.stickers.length>= 2 || stickers.status === 200">
            <p v-text="stickers.data.desc" class="lg:text-lg md:text-lg text-base text-justify text-gray-600">

            </p>
        </template>

    </template>


</template>


