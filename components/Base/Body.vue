
<script setup lang="ts">

interface Sticker {
    success?: boolean;
    message?: string;
    data?: object;
}

const stickersData = ref<Sticker>({
    success: false,
    message: '',
    data: {}
});

const loadingData = ref<boolean>();
const fec = (id: number, reg: string) => {
    loadingData.value = true
    setTimeout(async() => {
        const response = await $fetch(`/api/sticker/${id}/${reg}`);
        stickersData.value = response
        if(stickersData.value.success === true){
            loadingData.value = false
        }
}, 100);

}

const isLoading = computed(() =>{
    return loadingData.value ? 'loading' : 'not loading'
})

onUpdated(() =>{
    isLoading
})

</script>
<template>
    <div>
        {{stickersData.message}}

        <div v-text="isLoading">

        </div>
        <button @click="fec(4857276, 'en')">Tekan</button>
    </div>
</template>