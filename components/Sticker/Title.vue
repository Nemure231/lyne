<script setup lang="ts">

const item: any = inject('stickersProvideData');

const loadingSticker: any = inject('loadingStickersProvideData');


</script>


<template>
    <ClientOnly>
        <div v-if="loadingSticker" class="animate-pulse hover:bg-green-400 rounded-3xl lg:mt-0 md:mt-0 mt-3 lg:block md:block inline-flex
                justify-center lg:w-80 lg:h-11 md:w-80 md:h-11 w-50 h-8 bg-gray-300">
        </div>
        <template v-else>
            <span v-if="item.data?.stickers?.length > 0 && item.status === 200"
                v-text="item.data.title.replace('- Stiker LINE | LINE STORE', '')" class="lg:mt-0 md:mt-0 mt-3
                    lg:text-5xl md:text-5xl text-3xl font-bold">

            </span>
        </template>
    </ClientOnly>
</template>


