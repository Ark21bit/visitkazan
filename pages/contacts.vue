<template>
    <h1 class="text-2xl lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack font-Nekst max-lg:max-w-290px">{{ generalConfig?.static_info?.global_words?.contact }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-7.5 mt-7.5 lg:mt-12.5">
        <div>
            <h3 class="font-Nekst text-fblack text-lg font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.address }}</h3>
            <div class="mt-4 lg:mt-5 pt-4 lg:pt-5 gap-2 border-t border-fline3 flex flex-col">
                <p class="text-sm leading-1.4 font-medium text-black2">{{ generalConfig?.static_info?.contact?.addresses?.main }}</p>
            </div>
        </div>
        <div>
            <h3 class="font-Nekst text-fblack text-lg font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.telephone }}</h3>
            <div class="mt-4 lg:mt-5 pt-4 lg:pt-5 gap-2 border-t border-fline3 flex flex-col">
                <NuxtLink :to="phoneLinkReplace(telephon)" v-for="telephon in generalConfig?.static_info?.contact?.telephones" class="text-sm leading-1.4 font-medium text-fblue w-fit">{{ telephon }}</NuxtLink>
            </div>
        </div>
        <div>
            <h3 class="font-Nekst text-fblack text-lg font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.email }}</h3>
            <div class="mt-4 lg:mt-5 pt-4 lg:pt-5 gap-2 border-t border-fline3 flex flex-col">
                <NuxtLink :to="`mailto:${email}`" v-for="email in generalConfig?.static_info?.contact?.emails" class="text-sm leading-1.4 font-medium text-fblue w-fit">{{ email }}</NuxtLink>
            </div>
        </div>
        <div>
            <h3 class="font-Nekst text-fblack text-lg font-semibold leading-1.2">{{ generalConfig?.static_info?.global_words?.time_work }}</h3>
            <div class="mt-4 lg:mt-5 pt-4 lg:pt-5 gap-2 border-t border-fline3 flex flex-col text-fmain text-sm leading-1.4">
                <div v-for="item in generalConfig?.static_info?.contact?.opening_hours" class="flex gap-2">
                    <p class="text-fblack">{{ item }}</p>
                </div>
            </div>
        </div>
    </div>
    <Feedback :title="pageInfo?.content?.form_search?.title" :description="pageInfo?.content?.form_search?.description" class="mt-15 lg:mt-12.5"></Feedback>
    <div class="mt-15 lg:mt-25 col-span-full rounded-t-7.5 overflow-hidden h-404px lg:h-500px -mb-27.5 lg:-mb-44">
        <ClientOnly>
            <YandexMap controls="false" :coordinates="[55.45, 49.1]" class="w-full h-full"></YandexMap>
        </ClientOnly>
    </div>
</template>

<script setup>
import { YandexMap } from 'vue-yandex-maps'
definePageMeta({
    layout: 'fixed'
})
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const { data: pageInfo } = await useBaseFetch(`search/page`, {
    key: 'contact',
    query: { key: 'contact' }
})

useSeoMeta({
    title: () => pageInfo.value?.seo?.title ?? " ",
    description: () => pageInfo.value?.seo?.description ?? " ",
    keywords: () => pageInfo.value?.seo?.keywords ?? ' ',
})
</script>
