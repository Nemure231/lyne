

<script setup lang="ts">

const stickers:any = inject('stickersProvideData');

const loadingSticker:any = inject('loadingStickersProvideData');

</script>
<template>
    <template v-if="!loadingSticker">
        <template v-if="stickers.status === 404">
            <div class="lg:-mt-10 md:-mt-10 -mt-0 flex justify-center items-center flex-col mx-auto">
                <h1 class="text-center text-8xl text-red-500 font-bold font-sans">404</h1>
                <h2 class="text-center text-3xl font-semibold font-sans lg:-mt-14 -mt-14">
                    Sticker Not Found!
                </h2>
                <p class="font-sans text-center text-gray-500 -mt-3">
                    Try searching the available sticker at:
                </p>
                <a href="https://store.line.me/" class="text-white bg-green-500 py-3 px-6 text-center font-sans no-underline
                    rounded-md font-semibold text-md">
                    Line Store
                </a>
            </div>
        </template>
    </template>
</template>