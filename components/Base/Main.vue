
<script setup lang="ts">

interface Sticker {
    success?: boolean;
    message?: string;
    data?: object;
}

interface SearchSticker {
    link?: String;
}

const stickersData = ref<Sticker>({
    success: false,
    message: '',
    data: {}
});

const searchData = ref<SearchSticker>({
    link: '',
});

const loadingData = ref<boolean>();
const fec = (link: string) => {
    const id = link.split('/')[5];
    const reg = link.split('/')[6];
    loadingData.value = true
    setTimeout(async () => {
        const response = await $fetch(`/api/sticker/${id}/${reg}`);
        stickersData.value = response
        if (stickersData.value.success === true) {
            loadingData.value = false
        }
    }, 100);
}

const isLoading = computed(() => {
    return loadingData.value ? 'loading' : 'not loading'
})

const isImage = computed(() => {

    if (stickersData.value.status === 200) {
        // Stiker ketemu
        return ''
    } else if (stickersData.value.status === 204) {
        // Stiker ketemu tapi gak bisa dl
        return ''
    } else {
        // Stiker gak ketemu
        return
    }
})

onUpdated(() => {
    isLoading
})

</script>
<template>
    <main w-full flex flex-wrap flex-col justify-center items-center z-10>
        {{ isImage }}
        <section flex-1 lg:mt-12 md:mt-12 mt-2 relative w-full h-full>
            <div flex justify-center flex-wrap>
                <div relative flex-1 2xl:max-w-7xl gap-y-6 lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-max lg:mx-3
                    md:mx-0 mx-4>

                    <form @submit.prevent="fec(searchData.link)" lg:flex md:flex hidden justify-end flex-row flex-wrap items-center
                        gap-3>
                        
                        <input v-model="searchData.link" shadow-lg focus:outline-none border-3 border-green-500
                            xl:text-lg text-base xl:w-96 lg:w-80 md:w-90 w-72 rounded-3xl px-3 xl:py-3 py-3
                            type="text" />
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

                    <div flex justify-start lg:flex-row md:flex-row flex-col mt-10 gap-x-6>
                        <div flex-none>
                            <div flex flex-col >
                                <div flex-none>
                                    <div flex sm:flex-row flex-col flex-nowrap items-center justify-center font-sans gap-x-3>
                                        <img flex-none lg:w-60 lg:h-60 md:w-50 md:h-50 h-40 w-40 object-cover 
                                            src="https://stickershop.line-scdn.net/stickershop/v1/product/4857276/LINEStorePC/main.png"
                                            alt="">
                                        <div flex-1 lg:hidden md:hidden block sm:text-left text-center>
                                            <span text-3xl font-bold>Gilrs Frontline</span>
                                            <p text-base text-gray-600 text-justify>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cum eveniet
                                                non, in magnam unde nisi eligendi, autem nulla similique eum sit excepturi
                                                consectetur rem error delectus? Voluptatem, repellendus quos!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div flex-1>
                                    <div flex lg:flex-col md:flex-col flex-row flex-nowrap gap-3 mt-6>
                                        <button flex-1 text-lg py-2 px-3 text-white hover:bg-green-400 cursor-pointer
                                            font-semibold bg-green-500 border-none rounded-3xl>
                                            Download All
                                        </button>
                                        <button flex-1 text-lg py-2 px-3 text-white hover:bg-green-400 cursor-pointer
                                            font-semibold bg-green-500 border-none rounded-3xl>
                                            Visit Store
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div flex-1>
                            <div flex-col flex-wrap font-sans lg:flex md:flex hidden>
                                <div flex-1>
                                    <span text-5xl font-bold>Gilrs Frontline</span>
                                </div>
                                <div flex-1 mt-2>
                                    <div flex flex-col flex-wrap>
                                        <p text-lg text-gray-600>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et cum eveniet
                                            non, in magnam unde nisi eligendi, autem nulla similique eum sit excepturi
                                            consectetur rem error delectus? Voluptatem, repellendus quos!
                                        </p>
                                        <div flex flex-row flex-nowrap gap-x-6 mt-6>
                                           
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <!-- {{ stickersData.message }}

                    <div v-text="isLoading">

                    </div>
                    <button @click="fec(4857276, 'en')">Tekan</button> -->
                </div>
            </div>
        </section>
    </main>
</template>