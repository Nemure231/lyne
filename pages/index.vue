
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
            searchData.value.link = ''
            loadingData.value = true
            loadImgTime.value = new Date().getTime() - startLoadImgTime;
            //  const response = await $fetch(`/api/sticker/${id}/${reg}`,{
            const response = await $fetch(`https://linesticker-scrap.herokuapp.com/${id}/${reg}`,{
                retry: 2
            });
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


useHead({
    title: 'Lyne',
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'utf-8',
    meta: [
        { 
            name: 'description', 
            content: 'Line stickers downloader' 
        },
        { 
            name: 'keywords', 
            content: 'downloader, download, scrap, image, ' 
        },
        { 
            name: 'author', 
            content: 'Karol.Y' 
        },
        { 
            name: 'theme-color', 
            content: '#1f1f1f' 
        },
        { 
            property: 'og:type', 
            content: 'website' 
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            property: 'og:site_name', 
            content: 'Lyne'
        },
        {
            property:'og:title',
            content: 'Lyne'
        },
        {
            property: 'og:url', 
            content: 'https://lyne.netlify.app/'
        },
        {
            property: 'og:description',
            content: 'Line stickers downloader'

        },
        {
            property: 'og:image',
            content: '/img/logo/logo.png'
        },
        {
            property: 'og:image:alt',
            content: 'Lyne'
        }
    ],
    link: [
        {
            rel: 'icon',
            href: '/img/logo/favicon.ico'
        }
    ],
    bodyAttrs: {
        class: 'mx-auto h-auto w-full flex flex-wrap flex-col justify-center relative m-0 overflow-x-hidden'
    }
})
</script>

<template>
    <div bg-white mx-auto h-auto w-screen flex flex-wrap flex-col justify-center relative lg:overflow-x-visible md:overflow-x-visible overflow-x-hidden>
        <BaseNav @childFec="(event) => fec(event)" :searchPropsData="searchData.link" />
        <BaseMain @childFec="(event) => fec(event)" :searchPropsData="searchData.link"
            :lengthPropsData="stickersData.data.stickers.length" />
        <BaseFooter />
    </div>
</template>
