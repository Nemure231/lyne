
<script setup lang="ts">

interface Sticker {
    success?: boolean;
    message?: string;
    status?: number,
    data?: {
        title: string,
        icon: string,
        desc: string,
        url: string,
        stickers: [
            {
                type: string,
                id: number,
                staticUrl: string,
                fallbackStaticUrl: string,
                animationUrl: string,
                popUrl: string,
                soundUrl: string,
            }
        ]
    }


}

interface SearchSticker {
    link?: string;
}

const stickersData = ref<Sticker>({
    success: false,
    message: '',
    status: 0,
    data: {
        title: '',
        icon: '',
        desc: '',
        url: '',
        stickers: [
            {
                type: '',
                id: 0,
                staticUrl: '',
                fallbackStaticUrl: '',
                animationUrl: '',
                popUrl: '',
                soundUrl: '',
            }
        ]
    }
});

const searchData = ref<SearchSticker>({
    link: '',
});

const loadingData = ref<boolean>();

let checkUrlImg = (url) => {
    if (url.match(/^https:?:\/\/.+\/.+$/)) {
        return true
    } else {
        return false
    }
}

let fec = (link: string) => {
    let id: number = Number(link.split('/')[5]);
    let reg: string = link.split('/')[6];
    const checkUrlType = checkUrlImg(link);
    console.log(id, reg)
    if (checkUrlType === true) {
        if (typeof id != "number" || id === 0 || isNaN(id)) {
            alert(`The url doesn't have id of sticker line!`);

        } else if (typeof reg != "string" || reg === '' || reg === undefined) {
            alert(`The url doesn't have region of sticker line!`)
        } else {
            loadingData.value = true
            setTimeout(async () => {
                const response = await $fetch(`/api/sticker/${id}/${reg}`);
                stickersData.value = response

                if (stickersData.value.success === true) {
                    loadingData.value = false
                }
                console.log(response)

            }, 1000);
        }
    } else {
        alert('The url only accept https protocol!')
    }
}


const isLoading = computed(() => {
    return loadingData.value ? 'loading' : 'not loading'
})

// const isImage = computed(() => {

//     if (stickersData.value.status === 200) {
//         // Stiker ketemu
//         return ''
//     } else if (stickersData.value.status === 204) {
//         // Stiker ketemu tapi gak bisa dl
//         return ''
//     } else {
//         // Stiker gak ketemu
//         return
//     }
// })

</script>

<template>
    <div bg-white mx-auto h-auto w-full flex flex-wrap flex-col justify-center relative>

        <BaseNav 
            @childFec="(event) => fec(event)" 
            :searchPropsData="searchData.link"
        />
        <BaseMain 
            @childFec="(event) => fec(event)"
            :stickersInfoPropsData="stickersData"
            :stickersListPropsData="stickersData.data.stickers"
            :loadingPropsData="loadingData" 
            :searchPropsData="searchData.link"
            :lengthPropsData="stickersData.data.stickers.length"
        />
        <BaseFooter />
    </div>
</template>

<style>
body {
    margin: 0px;
    overflow-x: hidden;
}
</style>