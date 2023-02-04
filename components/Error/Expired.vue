<script setup lang="ts">

const item:any = inject('stickersProvideData');
const loadingSticker:any = inject('loadingStickersProvideData');
</script>


<template>
    <template v-if="!loadingSticker">
        <template v-if="item.status == 204">
            <div class="lg:mt-13 md:mt-13 mt-20 flex justify-center items-center flex-col mx-auto">
                <img :src="`https://stickershop.line-scdn.net/stickershop/v1/product/${item.data.url.split('/')[5]}/android/main.png`"
                    class="mb-6 lg:w-40 lg:h-40 md:w-38 md:h-38 w-28 h-28 object-cover" alt="sticker" />

                <h2 class="-mt-6 text-center text-3xl font-semibold font-sans">
                    Sticker Found but ...
                </h2>
                <p  class="font-sans text-center text-gray-500 lg:-mt-0 md:-mt-2 -mt-0">
                    This sticker is default sticker or expired sticker!
                </p>
                <a :href="item.data.url" class="text-white bg-green-500 py-3 px-6 text-center font-sans no-underline
                    rounded-md font-semibold text-md">
                    Line Store
                </a>
            </div>
        </template>
    </template>
</template>