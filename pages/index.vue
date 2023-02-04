
<script setup lang="ts">

interface Sticker {
    success: boolean;
    message: string;
    status: number,
    data: {
        title: string,
        icon: string,
        desc: string,
        url: string,
        stickers: {
            type: string,
            id: number,
            staticUrl: string,
            fallbackStaticUrl: string,
            animationUrl: string,
            popUrl: string,
            soundUrl: string,
        }[]
    }
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

const searchData = ref<string>('');
const stickerList = ref()

const loadingData = ref<boolean>(false);

let checkUrlImg = (url: string) => {
    if (url.match(/^https:?:\/\/.+\/.+$/)) {
        return true
    } else {
        return false
    }
}

const config = useRuntimeConfig()

let fec = async (link: string) => {

    let id: number = Number(link.split('/')[5]);
    let reg: string = link.split('/')[6];
    const checkUrlType = checkUrlImg(link);


    if (checkUrlType == true) {
        if (typeof id != "number" || id === 0 || isNaN(id)) {
            alert(`The url doesn't have id of sticker line!`);
        } else if (typeof reg != "string" || reg === '' || reg === undefined) {
            alert(`The url doesn't have region of sticker line!`)
        } else {
            searchData.value = ''
            loadingData.value = true
            const response: any = await $fetch(`${config.public.api_netlify_function}/scrap?id=${id}&region=${reg}`);

            if (response.status) {
                stickersData.value = response
                stickerList.value = response.data.stickers
            }
        }

        loadingData.value = false

    } else {
        alert('The url only accept https protocol!')
    }
}

provide('stickersProvideData', computed({
    get: () => stickersData.value,
    set: (val) => {
        stickersData.value = val
    }
}))


provide('loadingStickersProvideData', computed({
    get: () => loadingData.value,
    set: (val) => {
        loadingData.value = val
    }
}))


useHead({
    title: 'Lyne',
    meta: [
        {
            name: 'charset',
            content: 'utf-8',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
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
            property: 'og:title',
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
    <div class="bg-white mx-auto h-auto w-screen flex flex-wrap flex-col justify-center relative lg:overflow-x-visible
        md:overflow-x-visible overflow-x-hidden">
        {{ stickerList }}
        <BaseNav @update:model="searchData = $event" @childFec="(event) => fec(event)" :searchPropsData="searchData" />

        <BaseMain @childFec="(event) => fec(event)" :searchPropsData="searchData"
            :lengthPropsData="stickersData.data?.stickers?.length" @update:model="searchData = $event" />

        <BaseFooter />
    </div>
</template>
