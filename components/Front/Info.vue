<script setup lang="ts">

const item: any = inject('stickersProvideData');

const loadingSticker: any = inject('loadingStickersProvideData');

</script>

<template>

    <template v-if="!loadingSticker">
        <template v-if="!item.status">
            <div>
                <div class="lg:-mt-8 md:-mt-8 -mt-0">
                    <h1 class="text-center text-8xl text-green-500 font-bold font-sans">Lyne</h1>
                    <h2 class="-mt-6 text-center text-3xl font-semibold font-sans">
                        Line Sticker Downloader
                    </h2>
                </div>
                <div class="flex flex-nowrap flex-row items-center justify-center mx-auto xl:w-130 lg:w-130 md:w-96 w-64
                    lg:gap-x-6 md:gap-x-6 gap-x-3 font-sans text-gray-600">
                    <div class="flex-none">
                        <div class="flex flex-col items-center">

                            <div class="relative lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 rounded-full bg-white border-2
                                border-green-500 inline-flex justify-center items-center">
                                <svg class="lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 12 12">
                                    <path fill="#22c55e"
                                        d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1ZM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Z">
                                    </path>
                                </svg>

                                <span class="-bottom-6 absolute text-center font-semibold lg:text-base md:text-base
                                    text-xs">
                                    Search
                                </span>

                            </div>
                        </div>

                    </div>
                    <div class="flex-1">
                        <div class="h-3 w-full bg-green-500 rounded-xl">

                        </div>
                    </div>
                    <div class="flex-none">
                        <div class="relative lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 rounded-full bg-white border-2
                            border-green-500 inline-flex justify-center items-center">
                            <svg class="lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                <path fill="#22c55e"
                                    d="M10 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM4.5 2A2.5 2.5 0 0 0 2 4.5v5A2.5 2.5 0 0 0 4.5 12h5A2.5 2.5 0 0 0 12 9.5v-5A2.5 2.5 0 0 0 9.5 2h-5ZM3 4.5A1.5 1.5 0 0 1 4.5 3h5A1.5 1.5 0 0 1 11 4.5v5c0 .232-.053.45-.146.647L8.209 7.502a1.71 1.71 0 0 0-2.418 0l-2.645 2.645A1.494 1.494 0 0 1 3 9.5v-5Zm.853 6.354l2.645-2.645a.71.71 0 0 1 1.004 0l2.645 2.645A1.494 1.494 0 0 1 9.5 11h-5c-.232 0-.45-.053-.647-.146ZM7 14a2.496 2.496 0 0 1-2-1h4.5A3.5 3.5 0 0 0 13 9.5V4c.607.456 1 1.182 1 2v3.5A4.5 4.5 0 0 1 9.5 14H7Z">
                                </path>
                            </svg>

                            <span class="-bottom-6 absolute text-center font-semibold lg:text-base md:text-base
                                text-xs">
                                Preview
                            </span>

                        </div>

                    </div>
                    <div class="flex-1">
                        <div class="h-3 w-full bg-green-500 rounded-xl">
                        </div>
                    </div>
                    <div class="flex-none">
                        <div class="relative lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 rounded-full bg-white border-2
                            border-green-500 inline-flex justify-center items-center">
                            <svg class="lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                <path fill="#22c55e"
                                    d="M8 2a.75.75 0 0 1 .75.75v8.787l2.941-3.287a.75.75 0 1 1 1.118 1L8.559 14a.75.75 0 0 1-1.118 0l-4.25-4.75a.75.75 0 1 1 1.118-1l2.941 3.287V2.75A.75.75 0 0 1 8 2Z">
                                </path>
                            </svg>
                            <span class="-bottom-6  absolute text-center font-semibold lg:text-base md:text-base
                                text-xs">
                                Download
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </template>
    </template>
</template>