
<script setup lang="ts">

interface StickerData {
    success?: boolean;
    message?: string;
    data?: object;
}

const stickers = ref<StickerData>({
    success: false,
    message: '',
    data: {}
});

const fec = async (id: number, reg: string) => {
    const response = await $fetch(`/api/sticker/${id}/${reg}`);
    stickers.value = response
}

</script>
<template>
    <div>
        {{stickers.message}}
        <button @click="fec(4857276, 'en')">Tekan</button>
    </div>
</template>