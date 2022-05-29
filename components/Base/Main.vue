
<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'

interface propsInter {
    loadingPropsData?: boolean,
    searchPropsData?: string,
    lengthPropsData?: number,
    stickersListPropsData?: {
        type: string,
        id: number,
        staticUrl: string,
        fallbackStaticUrl: string,
        animationUrl: string,
        popUrl: string,
        soundUrl: string,
    },
    stickersInfoPropsData?: {
        success: boolean;
        message: string;
        status: number,
        data: {
            title: string,
            icon: string,
            desc: string,
            url: string,
        }
    }
}
const props = defineProps<propsInter>();

const defaultLoop = ref<number>(1);

const emitChildFec = defineEmits(["childFec"]);

const childFec = () => {
    emitChildFec("childFec", props.searchPropsData)
}

const focusScale = ref(0);

</script>
<template>
    <main w-full flex flex-wrap flex-col justify-center items-center z-10>
        <section flex-1 lg:mt-6 md:mt-6 mt-2 mb-20 relative w-full h-full>
            <div flex justify-center flex-wrap>
                <div relative flex-1 2xl:max-w-7xl gap-y-6 lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-max lg:mx-3
                    md:mx-2 mx-4>

                    <form @submit.prevent="childFec()" lg:flex md:flex hidden justify-end flex-row flex-wrap
                        items-center gap-3>

                        <input v-model="searchPropsData" shadow-lg focus:outline-none border-3 border-green-500
                            xl:text-lg text-base xl:w-96 lg:w-80 md:w-90 w-72 rounded-3xl px-3 xl:py-3 py-3 type="text"
                            placeholder="Link sticker ...." />
                        <button type="submit" hover:bg-green-400 shadow-lg inline-flex lg:justify-center
                            md:justify-center justify-center lg:gap-x-0 md:gap-x-0 gap-x-2 px-6 items-center
                            cursor-pointer lg:w-14 lg:h-14 md:w-14 md:h-14 h-10 w-77 bg-green-500 border-none
                            rounded-full>

                            <span lg:hidden md:hidden block text-lg font-bold text-white>Search</span>
                            <img 2xl:w-12 2xl:h-12 w-8 h-8
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1mbHVlbnQiIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMTIgMTIiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01IDFhNCA0IDAgMSAwIDIuMjQ4IDcuMzFsMi40NzIgMi40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDguMzEgNy4yNDhBNCA0IDAgMCAwIDUgMVpNMi41IDVhMi41IDIuNSAwIDEgMSA1IDBhMi41IDIuNSAwIDAgMS01IDBaIj48L3BhdGg+PC9zdmc+"
                                alt="Search">
                        </button>

                    </form>


                    <template v-if="lengthPropsData === 1">
                        <template v-if="!loadingPropsData">
                            <div lg:-mt-8 md:-mt-8 -mt-0>
                                <h1 text-center text-8xl text-green-500 font-bold font-sans>Lyn</h1>
                                <h2 -mt-6 text-center text-3xl font-semibold font-sans>
                                    Line Sticker Downloader
                                </h2>
                            </div>
                            <div flex flex-nowrap flex-row items-center justify-center mx-auto xl:w-130 lg:w-130 md:w-96
                                w-70 lg:gap-x-6 md:gap-x-6 gap-x-3 font-sans text-gray-600>
                                <div flex-none>
                                    <div flex flex-col items-center>

                                        <div relative lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 rounded-full bg-white
                                            border-2 border-green-500 inline-flex justify-center items-center>
                                            <svg lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5 xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 12 12">
                                                <path fill="#22c55e"
                                                    d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1ZM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Z">
                                                </path>
                                            </svg>

                                            <span absolute -bottom-6 text-center font-semibold lg:text-base md:text-base
                                                text-xs>
                                                Search
                                            </span>

                                        </div>
                                    </div>

                                </div>
                                <div flex-1>
                                    <div h-3 w-full bg-green-500 rounded-xl>

                                    </div>
                                </div>
                                <div flex-none>
                                    <div relative lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 rounded-full bg-white border-2
                                        border-green-500 inline-flex justify-center items-center>
                                        <svg lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5 xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                            <path fill="#22c55e"
                                                d="M10 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM4.5 2A2.5 2.5 0 0 0 2 4.5v5A2.5 2.5 0 0 0 4.5 12h5A2.5 2.5 0 0 0 12 9.5v-5A2.5 2.5 0 0 0 9.5 2h-5ZM3 4.5A1.5 1.5 0 0 1 4.5 3h5A1.5 1.5 0 0 1 11 4.5v5c0 .232-.053.45-.146.647L8.209 7.502a1.71 1.71 0 0 0-2.418 0l-2.645 2.645A1.494 1.494 0 0 1 3 9.5v-5Zm.853 6.354l2.645-2.645a.71.71 0 0 1 1.004 0l2.645 2.645A1.494 1.494 0 0 1 9.5 11h-5c-.232 0-.45-.053-.647-.146ZM7 14a2.496 2.496 0 0 1-2-1h4.5A3.5 3.5 0 0 0 13 9.5V4c.607.456 1 1.182 1 2v3.5A4.5 4.5 0 0 1 9.5 14H7Z">
                                            </path>
                                        </svg>

                                        <span absolute -bottom-6 text-center font-semibold lg:text-base md:text-base
                                            text-xs>
                                            Preview
                                        </span>

                                    </div>

                                </div>
                                <div flex-1>
                                    <div h-3 w-full bg-green-500 rounded-xl>

                                    </div>

                                </div>
                                <div flex-none>
                                    <div relative lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 rounded-full bg-white border-2
                                        border-green-500 inline-flex justify-center items-center>
                                        <svg lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5 xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                            <path fill="#22c55e"
                                                d="M8 2a.75.75 0 0 1 .75.75v8.787l2.941-3.287a.75.75 0 1 1 1.118 1L8.559 14a.75.75 0 0 1-1.118 0l-4.25-4.75a.75.75 0 1 1 1.118-1l2.941 3.287V2.75A.75.75 0 0 1 8 2Z">
                                            </path>
                                        </svg>
                                        <span absolute -bottom-6 text-center font-semibold lg:text-base md:text-base
                                            text-xs>
                                            Download
                                        </span>

                                    </div>
                                </div>
                            </div>

                        </template>
                    </template>

                    <!-- Wip -->
                    <template v-if="stickersInfoPropsData.status === 200">

                        <div flex justify-start lg:flex-row md:flex-row flex-wrap flex-col mt-10 gap-x-6>
                            <div flex-none>
                                <div flex flex-col lg:sticky md:sticky relative lg:top-16 md:top-16 top-0>
                                    <div flex-none>
                                        <div flex sm:flex-row flex-col flex-nowrap items-center justify-center font-sans
                                            gap-x-3>

                                            <template v-if="loadingPropsData">
                                                <div animate-pulse bg-gray-300 rounded-md flex-none lg:w-60 lg:h-60
                                                    md:w-50 md:h-50 h-40 w-40 object-cover></div>
                                            </template>
                                            <template v-else>
                                                <template v-if="lengthPropsData >= 2">
                                                    <img rounded-md flex-none lg:w-60 lg:h-60 md:w-50 md:h-50 h-40 w-40
                                                        object-cover :src="stickersInfoPropsData.data.icon" alt="">

                                                </template>
                                            </template>
                                            <div flex-1 lg:hidden md:hidden block sm:text-left text-center>
                                                <template v-if="loadingPropsData">
                                                    <div animate-pulse rounded-3xl mt-3 inline-flex justify-center w-50
                                                        h-8 bg-gray-300>
                                                    </div>
                                                </template>
                                                <template v-else>
                                                    <template v-if="lengthPropsData >= 2">
                                                        <span
                                                            v-text="stickersInfoPropsData.data.title.replace('- Stiker LINE | LINE STORE', '')"
                                                            lg:mt-0 md:mt-0 mt-3 text-3xl font-bold>

                                                        </span>
                                                    </template>
                                                </template>
                                                <template v-if="loadingPropsData">
                                                    <p space-y-2>
                                                    <div animate-pulse rounded-3xl w-60 h-4 bg-gray-300>

                                                    </div>
                                                    <div animate-pulse rounded-3xl w-30 h-4 bg-gray-300>

                                                    </div>
                                                    <div animate-pulse rounded-3xl w-50 h-4 bg-gray-300>

                                                    </div>


                                                    </p>
                                                </template>
                                                <template v-else>
                                                    <template v-if="lengthPropsData >= 2">
                                                        <p v-text="stickersInfoPropsData.data.desc" text-base
                                                            text-gray-600 text-justify>

                                                        </p>
                                                    </template>

                                                </template>

                                            </div>
                                        </div>
                                    </div>
                                    <div flex-1>
                                        <div flex lg:flex-col md:flex-col flex-row justify-center flex-wrap gap-3 mt-6>

                                            <template v-if="loadingPropsData">
                                                <button flex-1 text-lg py-5 text-white hover:bg-green-400 cursor-pointer
                                                    font-semibold animate-pulse bg-gray-300 border-none rounded-3xl>

                                                </button>
                                                <button flex-1 text-lg py-5 text-white hover:bg-green-400 cursor-pointer
                                                    font-semibold animate-pulse bg-gray-300 border-none rounded-3xl>
                                                </button>
                                            </template>
                                            <template v-else>
                                                <template v-if="lengthPropsData >= 2">
                                                    <button flex-1 lg:text-lg md:text-lg sm:text-md text-base py-2 px-3
                                                        text-white hover:bg-green-400 cursor-pointer font-semibold
                                                        bg-green-500 border-none rounded-3xl>
                                                        Download
                                                    </button>
                                                    <a :href="stickersInfoPropsData.data.url" no-underline lg:text-xl
                                                        md:text-xl sm:text-lg text-md flex-1 py-2 px-3 text-white
                                                        hover:bg-green-400 cursor-pointer font-semibold font-sans
                                                        text-center bg-green-500 border-none rounded-3xl>
                                                        Store
                                                    </a>

                                                </template>

                                            </template>
                                        </div>
                                    </div>
                                    <div flex-1 lg:hidden md:hidden block>


                                        <template v-if="loadingPropsData">

                                            <div flex flex-wrap justify-center items-center flex-row gap-6 mt-4>
                                                <div v-for="defaultLoop in 10" animate-pulse bg-gray-300 rounded-md
                                                    flex-none h-30 w-30></div>
                                            </div>

                                        </template>

                                        <template v-else>
                                            <template v-if="lengthPropsData >= 2">
                                                <OnClickOutside @trigger="focusScale = 0">
                                                    <div flex flex-wrap justify-center items-center flex-row gap-6 mt-4>

                                                        <div v-for="pl in stickersListPropsData" :key="pl.id"
                                                            :style="{ backgroundImage: `url(${pl.staticUrl})` }"
                                                            cursor-pointer relative rounded-md flex-none h-30 w-30
                                                            bg-cover
                                                            :class="focusScale === pl.id ? 'scale-115' : 'scale-100'"
                                                            :id="`focusScaleSticker${pl.id}`">

                                                            <div @click="focusScale = pl.id"
                                                                :id="`focusBgSticker${pl.id}`"
                                                                :class="focusScale === pl.id ? 'bg-white/0' : (focusScale === 0 ? 'bg-white/0' : 'bg-white/48')"
                                                                absolute inset-0 class="hover:bg-white/0">
                                                                <button
                                                                    :class="focusScale === pl.id ? 'flex' : 'hidden'"
                                                                    justify-center items-center border-none bg-white
                                                                    p-1.5 rounded-bl-md absolute right-0 top-0
                                                                    cursor-pointer>
                                                                    <svg w-5 h-5 fill-green-500
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        aria-hidden="true" role="img"
                                                                        preserveAspectRatio="xMidYMid meet"
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
                                            </template>

                                        </template>

                                    </div>

                                </div>
                            </div>
                            <div flex-1>
                                <div flex-col flex-wrap font-sans lg:flex md:flex hidden>
                                    <div flex-1>
                                        <template v-if="loadingPropsData">
                                            <div animate-pulse rounded-3xl w-80 h-11 bg-gray-300>

                                            </div>
                                        </template>
                                        <template v-else>
                                            <template v-if="lengthPropsData >= 2">
                                                <span
                                                    v-text="stickersInfoPropsData.data.title.replace('- Stiker LINE | LINE STORE', '')"
                                                    text-5xl font-bold>

                                                </span>
                                            </template>
                                        </template>
                                    </div>
                                    <div flex-1 mt-2>
                                        <div flex flex-col flex-wrap>
                                            <template v-if="loadingPropsData">
                                                <p space-y-2>
                                                <div animate-pulse rounded-3xl w-98 h-4 bg-gray-300>

                                                </div>
                                                <div animate-pulse rounded-3xl w-75 h-4 bg-gray-300>

                                                </div>
                                                <div animate-pulse rounded-3xl w-85 h-4 bg-gray-300>

                                                </div>
                                                <div animate-pulse rounded-3xl w-70 h-4 bg-gray-300>

                                                </div>

                                                </p>
                                            </template>
                                            <template v-else>
                                                <template v-if="lengthPropsData >= 2">
                                                    <p text-lg text-gray-600>
                                                        Official Stickers Vol. 1 of "Girls' Frontline", contains a
                                                        lot of
                                                        funny
                                                        stickers about Tactical Girls. Full of cuteness! Full of
                                                        laughter!
                                                    </p>
                                                </template>

                                            </template>
                                            <div flex flex-row flex-nowrap gap-x-6 mt-6>

                                            </div>

                                        </div>
                                    </div>
                                    <div flex-1 basis-full>
                                        <div flex flex-wrap justify-start items-center flex-row gap-6>

                                            <template v-if="loadingPropsData">
                                                <div v-for="defaultLoop = 1 in 10" animate-pulse bg-gray-300 rounded-md
                                                    flex-none lg:w-40 lg:h-40 w-38 h-38></div>
                                            </template>

                                            <template v-else>
                                                <template v-if="lengthPropsData >= 2">
                                                    <OnClickOutside @trigger="focusScale = 0">

                                                        <div flex flex-wrap justify-center items-center flex-row gap-6
                                                            mt-4>

                                                            <div v-for="pl in stickersListPropsData" :key="pl.id"
                                                                :style="{ backgroundImage: `url(${pl.staticUrl})` }"
                                                                cursor-pointer relative rounded-md flex-none lg:w-40
                                                                lg:h-40 w-38 h-38 bg-cover
                                                                :class="focusScale === pl.id ? 'scale-115' : 'scale-100'"
                                                                :id="`focusScaleSticker${pl.id}`">

                                                                <div @click="focusScale = pl.id"
                                                                    :id="`focusBgSticker${pl.id}`"
                                                                    :class="focusScale === pl.id ? 'bg-white/0' : (focusScale === 0 ? 'bg-white/0' : 'bg-white/48')"
                                                                    absolute inset-0 class="hover:bg-white/0">

                                                                </div>
                                                                <button
                                                                    :class="focusScale === pl.id ? 'flex' : 'hidden'"
                                                                    justify-center items-center border-none bg-white p-2
                                                                    rounded-bl-md absolute right-0 top-0 cursor-pointer>
                                                                    <svg lg:w-6 lg:h-6 md:w-6 md:h-6 h-5 w-5
                                                                        fill-green-500
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                        aria-hidden="true" role="img"
                                                                        preserveAspectRatio="xMidYMid meet"
                                                                        viewBox="0 0 256 256">
                                                                        <path
                                                                            d="M80.3 115.7a8 8 0 0 1 11.4-11.3l28.3 28.3V40a8 8 0 0 1 16 0v92.7l28.3-28.3a8 8 0 0 1 11.4 11.3l-42 42a8.2 8.2 0 0 1-11.4 0ZM216 144a8 8 0 0 0-8 8v56H48v-56a8 8 0 0 0-16 0v56a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-56a8 8 0 0 0-8-8Z">
                                                                        </path>
                                                                    </svg>
                                                                </button>

                                                            </div>




                                                        </div>

                                                    </OnClickOutside>
                                                </template>

                                            </template>


                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </template>

                </div>
            </div>
        </section>
    </main>
</template>