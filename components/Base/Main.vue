
<script setup lang="ts">

interface propsInter {
    searchPropsData?: string,
}

const props = defineProps<propsInter>();
const input = ref();

onMounted(() => {
    input.value.focus()
})


const emitChildFec = defineEmits(["childFec", "update:model"]);

const childFec = () => {
    emitChildFec("childFec", props.searchPropsData)
}


const model = computed({
    get: () => props.searchPropsData,
    set: (val) => {
        emitChildFec('update:model', val)
    }
})


</script>
<template>
    <main class="flex-1 z-10 lg:overflow-x-visible md:overflow-x-visible overflow-x-hidden">
        <div class="w-full flex flex-wrap flex-col justify-center items-center">
            <section class="flex-1 lg:mt-6 md:mt-6 mt-2 mb-20 relative w-full h-full">
                <div class="flex justify-center flex-wrap">
                    <div class="relative flex-1 2xl:max-w-7xl gap-y-6 lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-max lg:mx-3
                        md:mx-2 mx-6">

                        <form @submit.prevent="childFec()" class="lg:flex md:flex hidden justify-end flex-row flex-wrap
                            items-center gap-3 mr-4">


                            <input ref="input" v-model="model" class="shadow-lg focus:outline-none border-3 border-green-500
                                xl:text-lg text-base xl:w-96 lg:w-80 md:w-90 w-72 rounded-3xl px-3 xl:py-3 py-3"
                                type="text" placeholder="Link sticker/emoji ...." />


                            <button type="submit" class="hover:bg-green-400 shadow-lg inline-flex lg:justify-center
                                md:justify-center justify-center lg:gap-x-0 md:gap-x-0 gap-x-2 px-6 items-center
                                cursor-pointer lg:w-14 lg:h-14 md:w-14 md:h-14 h-10 w-77 bg-green-500 border-none
                                rounded-full">

                                <span class="lg:hidden md:hidden block text-lg font-bold text-white">Search</span>
                                <img class="2xl:w-12 2xl:h-12 w-8 h-8"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1mbHVlbnQiIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMTIgMTIiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik01IDFhNCA0IDAgMSAwIDIuMjQ4IDcuMzFsMi40NzIgMi40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDguMzEgNy4yNDhBNCA0IDAgMCAwIDUgMVpNMi41IDVhMi41IDIuNSAwIDEgMSA1IDBhMi41IDIuNSAwIDAgMS01IDBaIj48L3BhdGg+PC9zdmc+"
                                    alt="Search">
                            </button>
                        </form>
                        <FrontInfo></FrontInfo>
                        <ErrorNotFound></ErrorNotFound>
                        <ErrorExpired></ErrorExpired>

                        <div class="flex justify-start lg:flex-row md:flex-row flex-wrap flex-col mt-10 gap-x-6">
                            <div class="flex-none">
                                <div class="flex flex-col lg:sticky md:sticky relative lg:top-19 md:top-19 top-0">
                                    <div class="flex-none">
                                        <div class="flex sm:flex-row flex-col flex-nowrap items-center justify-center font-sans
                                            gap-x-3">

                                            <StickerIcon></StickerIcon>

                                            <div class="flex-1 lg:hidden md:hidden block sm:text-left text-center">
                                                <StickerTitle></StickerTitle>

                                                <StickerDesc></StickerDesc>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <div
                                            class="flex lg:flex-col md:flex-col flex-row justify-center flex-wrap gap-3 mt-6">

                                            <StickerButton></StickerButton>
                                        </div>
                                    </div>
                                    <div class="flex-1 lg:hidden md:hidden block">

                                        <StickerList></StickerList>
                                    </div>

                                </div>
                            </div>
                            <div class="flex-1">
                                <div class="flex-col flex-wrap font-sans lg:flex md:flex hidden">
                                    <div class="flex-1">
                                        <StickerTitle></StickerTitle>

                                    </div>
                                    <div class="flex-1 mt-2">
                                        <div class="flex flex-col flex-wrap">

                                            <StickerDesc></StickerDesc>
                                            <div class="flex flex-row flex-nowrap gap-x-6 mt-6">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-1 basis-full">
                                        <StickerList></StickerList>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    </main>
</template>