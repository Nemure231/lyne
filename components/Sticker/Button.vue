<script setup lang="ts">
import JSZip from 'jszip'
import { saveAs } from 'file-saver';

const item: any = inject('stickersProvideData');
const loadingSticker: any = inject('loadingStickersProvideData');

const list = ref([]);
const stickerList = ref([]);

let downloadImg = async () => {
    var count = 0;

    item.value.data?.stickers?.forEach((el: { staticUrl: any }) => {
        list.value.push(el.staticUrl);
    });

    Promise.all(list.value.map(url => {
        list.value = [];
        fetch(url)
            .then(response => {
                return response.blob();
            })
            .then((blob) => {
                stickerList.value.push(blob);
            })
    }));


    var zip = new JSZip();
    setTimeout(() => {
        stickerList.value.forEach(el => {
            zip.file(`${count + 1}.png`, el, {
                binary: true
            });
            ++count;
            if (count == stickerList.value.length) {
                zip.generateAsync({
                    type: "blob"
                })
                    .then(function (content) {
                        saveAs(content, `Lyn_${item.value.data.title.replace('- Stiker LINE | LINE STORE', '')}.zip`);
                        stickerList.value = []
                    });
            }
        });

    }, 1000)




}
</script>



<template>
    <ClientOnly>
        <button v-if="loadingSticker" class="flex-1 text-lg py-5 text-white cursor-pointer font-semibold animate-pulse hover:bg-green-400 bg-gray-300
                border-none rounded-3xl">

        </button>
        <button v-if="loadingSticker" class="flex-1 text-lg py-5 text-white cursor-pointer font-semibold animate-pulse hover:bg-green-400 bg-gray-300
                border-none rounded-3xl">
        </button>

        <button v-if="item.data?.stickers?.length >= 2 || item.status == 200" @click="downloadImg" class="flex-1 lg:text-lg md:text-lg sm:text-md text-base py-2 px-3 text-white
                    hover:bg-green-400 cursor-pointer font-semibold bg-green-500 border-none rounded-3xl">
            Download
        </button>
        <a v-if="item.data?.stickers?.length >= 2 || item.status == 200" :href="item.data.url" class="no-underline lg:text-xl md:text-xl sm:text-lg text-md flex-1 py-2 px-3
                    text-white hover:bg-green-400 cursor-pointer font-semibold font-sans text-center bg-green-500
                    border-none rounded-3xl">
            Store
        </a>
    </ClientOnly>

</template>


