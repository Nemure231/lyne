

<script setup lang="ts">

const stickersStatus = inject('stickersStatusProvideData');

const loadingSticker = inject('loadingStickersProvideData');

</script>
<template>
    <template v-if="!loadingSticker()">
        <template v-if="stickersStatus().status === 404">
            <div class="lg:-mt-10 md:-mt-10 -mt-0" flex justify-center items-center flex-col mx-auto>
                <h1 text-center text-8xl text-red-500 font-bold font-sans>404</h1>
                <h2 text-center text-3xl font-semibold font-sans class="lg:-mt-14 -mt-14">
                    Sticker Not Found!
                </h2>
                <p font-sans text-center text-gray-500 class="-mt-3">
                    Try searching the available sticker at:
                </p>
                <a href="https://store.line.me/" text-white bg-green-500 py-3 px-6 text-center font-sans no-underline
                    rounded-md font-semibold text-md>
                    Line Store
                </a>
            </div>
        </template>
    </template>
</template>