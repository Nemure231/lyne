<script setup lang="ts">

const item: any = inject('stickersProvideData');

const loadingSticker: any = inject('loadingStickersProvideData');
</script>



<template>
    <ClientOnly>
        <p v-if="loadingSticker" class="space-y-2">
            <div class="animate-pulse hover:bg-green-400 rounded-3xl lg:w-98 md:w-96 w-60 h-4 bg-gray-300">

            </div>
            <div class="animate-pulse hover:bg-green-400 rounded-3xl lg:w-75 md:w-75 w-30 h-4 bg-gray-300">

            </div>
            <div class="animate-pulse hover:bg-green-400 rounded-3xl lg:w-85 md:w-75 w-50 h-4 bg-gray-300">

            </div>
            <div class="animate-pulse hover:bg-green-400 rounded-3xl lg:w-70 md:w-70 w-47 h-4 bg-gray-300">
            </div>
        </p>
        <template v-else>
            <p v-if="item.data?.stickers?.length > 0 || item.status === 200" v-text="item.data.desc"
                class="lg:text-lg md:text-lg text-base text-justify text-gray-600">

            </p>
        </template>
    </ClientOnly>

</template>


