<template>
    <nav flex-1 h-full w-full justify-center items-center sticky top-0 z-50>
        <div 2xl:py-4 py-2 text-white flex flex-row flex-wrap lg:px-4 md:px-4 px-2 justify-between items-center mx-auto w-full
            bg-green-500>

            <span font-semibold lg:text-2xl ml-0.5 md:text-2xl text-md font-sans relative -top-3>
                Line
                <span lg:-bottom-5 md:-bottom-5 -bottom-4 left-4 absolute font-semibold lg:text-2xl ml-0.5 md:text-2xl text-md font-sans>
                    Line
                </span>
            </span>
            <form @submit.prevent="'fec(searchData.link)'" lg:hidden md:hidden flex justify-end flex-row flex-wrap lg:mr-6 md:mr-6 mr-4
                items-center gap-1>
                <input shadow-lg focus:outline-none border-none text-xs w-34 rounded-3xl px-3 type="text" class="py-1.5" 
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