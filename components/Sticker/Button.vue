<script setup lang="ts">
import JSZip from 'jszip'
import { saveAs } from 'file-saver';

const stickersInfo:any = inject('stickersInfoProvideData');
const stickersStatus:any = inject('stickersStatusProvideData');
const stickersList:any = inject('stickersListProvideData');
const loadingSticker:any = inject('loadingStickersProvideData');
const lengthSticker:any = inject('lengthStickersProvideData')

const list = ref([]);
const stickerList = ref([]);

let downloadImg = async () => {
    var count = 0;

    stickersList().forEach((el: { staticUrl: any }) => {
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
                    saveAs(content, `Lyn_${stickersInfo().title.replace('- Stiker LINE | LINE STORE', '')}.zip`);
                    stickerList.value = []
                });
            }
        });

    }, 1000)




}
</script>



<template>



    <template v-if="loadingSticker()">
        <button flex-1 text-lg py-5 text-white cursor-pointer font-semibold animate-pulse hover:bg-green-400 bg-gray-300
            border-none rounded-3xl>

        </button>
        <button flex-1 text-lg py-5 text-white cursor-pointer font-semibold animate-pulse hover:bg-green-400 bg-gray-300
            border-none rounded-3xl>
        </button>
    </template>
    <template v-else>
        <template v-if="lengthSticker() >= 2 || stickersStatus().status === 200">
            <button @click="downloadImg()" flex-1 lg:text-lg md:text-lg sm:text-md text-base py-2 px-3 text-white
                hover:bg-green-400 cursor-pointer font-semibold bg-green-500 border-none rounded-3xl>
                Download
            </button>
            <a :href="stickersInfo().url" no-underline lg:text-xl md:text-xl sm:text-lg text-md flex-1 py-2 px-3
                text-white hover:bg-green-400 cursor-pointer font-semibold font-sans text-center bg-green-500
                border-none rounded-3xl>
                Store
            </a>

        </template>

    </template>


</template>


