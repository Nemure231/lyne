<script setup lang="ts">
interface propsInter {
    searchPropsData?: string,
}
const props = defineProps<propsInter>();

const emitChildFec = defineEmits(["childFec"]);

const childFec = () => {
    emitChildFec("childFec", props.searchPropsData)
}
</script>


<template>
    <nav flex-1 h-full w-full justify-center items-center sticky top-0 z-50>
        <div 2xl:py-4 py-3 text-white flex flex-row flex-wrap lg:px-4 md:px-4 px-2 justify-between items-center mx-auto w-full
            bg-green-500>

            <span font-bold lg:text-3xl md:text-3xl text-lg font-sans>
                Lyn
             
            </span>
            <form @submit.prevent="childFec()" lg:hidden md:hidden flex justify-end flex-row flex-wrap lg:mr-6 md:mr-6 mr-4
                items-center gap-1>
                <input v-model="searchPropsData" shadow-lg focus:outline-none border-none text-xs sm:w-80 w-40  rounded-3xl px-3 type="text" class="py-2" 
                placeholder="Link sticker ...."/>

                <button type="submit" hover:bg-gray-200 shadow-lg inline-flex lg:justify-center md:justify-center
                    justify-center gap-x-1 p-1 items-center cursor-pointer
                    bg-white rounded-full border border-white>

                    <img w-5 h-5
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1mbHVlbnQiIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMTIgMTIiPjxwYXRoIGZpbGw9IiMyMmM1NWUiIGQ9Ik01IDFhNCA0IDAgMSAwIDIuMjQ4IDcuMzFsMi40NzIgMi40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDguMzEgNy4yNDhBNCA0IDAgMCAwIDUgMVpNMi41IDVhMi41IDIuNSAwIDEgMSA1IDBhMi41IDIuNSAwIDAgMS01IDBaIj48L3BhdGg+PC9zdmc+"
                        alt="Search">
                </button>

            </form>
        </div>
    </nav>
</template>