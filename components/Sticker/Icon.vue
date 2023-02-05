<script setup lang="ts">

const item: any = inject('stickersProvideData');

const loadingSticker: any = inject('loadingStickersProvideData');


</script>



<template>

    <ClientOnly>
        <div v-if="loadingSticker" class="animate-pulse hover:bg-green-400 bg-gray-300 rounded-md flex-none lg:w-60 lg:h-60 md:w-50 md:h-50 h-40 w-40
                object-cover">
        </div>
        <template v-else>
            <img v-if="item.data?.stickers?.length > 0 && item.status === 200"
                class="rounded-md flex-none lg:w-60 lg:h-60 md:w-50 md:h-50 h-40 w-40 object-cover"
                :src="item.data.icon" alt="">
        </template>
    </ClientOnly>


</template>


