import plugin from 'vue-yandex-maps'
import { defineNuxtPlugin } from 'nuxt/app'

const settings = {
    apiKey: '', // Индивидуальный ключ API
    lang: 'ru_RU', // Используемый язык
    coordorder: 'latlong', // Порядок задания географических координат
    debug: false, // Режим отладки
    version: '2.1' // Версия Я.Карт
  }

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(plugin, settings)
})