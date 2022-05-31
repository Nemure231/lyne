
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


const loadImgTime = ref<number>(0)

let fec = async (link: string) => {
    let id: number = Number(link.split('/')[5]);
    let reg: string = link.split('/')[6];
    const checkUrlType = checkUrlImg(link);

    const startLoadImgTime = new Date().getTime();

    if (checkUrlType === true) {
        if (typeof id != "number" || id === 0 || isNaN(id)) {
            alert(`The url doesn't have id of sticker line!`);

        } else if (typeof reg != "string" || reg === '' || reg === undefined) {
            alert(`The url doesn't have region of sticker line!`)
        } else {
            loadingData.value = true
            loadImgTime.value = new Date().getTime() - startLoadImgTime;
            const response = await $fetch(`/api/sticker/${id}/${reg}`);
            stickersData.value = response
            console.log(response)
        }

        setTimeout(async () => {
            loadingData.value = false
        }, loadImgTime.value);

    } else {
        alert('The url only accept https protocol!')
    }
}

provide('stickersListProvideData', () => stickersData.value.data.stickers);
provide('stickersInfoProvideData', () => stickersData.value.data);
provide('stickersStatusProvideData', () => stickersData.value);

provide('loadingStickersProvideData', () => loadingData.value);
provide('lengthStickersProvideData', () => stickersData.value.data.stickers.length);

</script>

<template>
    <div bg-white mx-auto h-auto w-full flex flex-wrap flex-col justify-center relative>
        <BaseNav @childFec="(event) => fec(event)" :searchPropsData="searchData.link" />
        <BaseMain @childFec="(event) => fec(event)" :searchPropsData="searchData.link"
            :lengthPropsData="stickersData.data.stickers.length" />
        <BaseFooter />
    </div>
</template>

<style>
body {
    margin: 0px;
    /* overflow-x: hidden; */
}
</style>