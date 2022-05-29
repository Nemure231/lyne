import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
    ],
    unocss: {
        uno: true, // enabled `@unocss/preset-uno`
        attributify: true, // enabled `@unocss/preset-attributify`,
        shortcuts: [],
        rules: [],
    },
})
