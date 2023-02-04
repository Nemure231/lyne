<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'
import { saveAs } from 'file-saver';

const item: any = inject('stickersProvideData');
const loadingSticker: any = inject('loadingStickersProvideData');

const focusScale = ref(0);

let downloadOneImg = async (eve: string, id: number) => {
    await fetch(eve)
        .then(response => {
            return response.blob();
        })
        .then(blob => {
            saveAs(blob, `${id}.png`);
        })
}

</script>


<template>
    <ClientOnly>
        <div v-if="loadingSticker" class="flex flex-wrap lg:justify-start md:justify-start justify-center items-center flex-row gap-6 lg:mt-0 md:mt-0
                mt-4">
            <div v-for="i in 10" class="animate-pulse hover:bg-green-400 bg-gray-300 rounded-md flex-none lg:w-40
                    lg:h-40 md:w-38 md:h-38 h-30 w-30">
            </div>
        </div>

        <div v-else>
            <OnClickOutside v-if="item.data.stickers.length > 2 && item.status == 200" @trigger="focusScale = 0">
                <div
                    class="flex flex-wrap lg:justify-start md:justify-start justify-center items-center flex-row gap-6 mt-4">

                    <div v-for="pl in item.data?.stickers" :key="pl.id"
                        :style="{ backgroundImage: `url(${pl.staticUrl})` }"
                        class="cursor-pointer relative rounded-md flex-none lg:w-40 lg:h-40 md:w-38 md:h-38 h-30 w-30 bg-cover"
                        :class="focusScale === pl.id ? 'scale-115' : 'scale-100'" :id="`focusScaleSticker${pl.id}`">

                        <div @click="focusScale = pl.id" :id="`focusBgSticker${pl.id}`"
                            :class="focusScale === pl.id ? 'bg-white/0' : (focusScale === 0 ? 'bg-white/0' : 'bg-white/48')"
                            class="hover:bg-white/0 absolute inset-0 ">
                            <button @click="downloadOneImg(pl.staticUrl, pl.id)"
                                :class="focusScale === pl.id ? 'flex' : 'hidden'" class="justify-center items-center
                                    border-none bg-white p-1.5 rounded-bl-md absolute right-0 top-0 cursor-pointer">
                                <svg class="lg:w-6 lg:h-6 md:w-6 md:h-6 w-5 h-5 fill-green-500"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 256 256">
                                    <path
                                        d="M80.3 115.7a8 8 0 0 1 11.4-11.3l28.3 28.3V40a8 8 0 0 1 16 0v92.7l28.3-28.3a8 8 0 0 1 11.4 11.3l-42 42a8.2 8.2 0 0 1-11.4 0ZM216 144a8 8 0 0 0-8 8v56H48v-56a8 8 0 0 0-16 0v56a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-56a8 8 0 0 0-8-8Z">
                                    </path>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </OnClickOutside>

        </div>
    </ClientOnly>
</template>


