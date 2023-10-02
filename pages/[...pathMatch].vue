<template>
    <NuxtLayout :name="layout">
        <component :is="page" :pageInfo="pageInfo?.data" v-bind="componetAttrs"></component>
    </NuxtLayout>
</template>

<script setup>
definePageMeta({
    layout: false,
})
const route = useRoute()

/* получение информации о запршиваемой странице из api */
const { data: pageInfo, error } = await useBaseFetch(`search/slugs`, {
    query: { slug: route.path }
})
if (error.value) throw createError({ statusCode: error.value.statusCode, statusMessage: error.value.statusMessage, fatal: true })

const layout = computed(() => {
    if (pageInfo.value?.type === 'hotel' || pageInfo.value?.type === 'product' || pageInfo.value?.type === 'blog') return 'default'
    if (pageInfo.value?.type === 'page' || pageInfo.value?.type === 'timetable') return 'fixed'
    return 'default'
})

const componetAttrs = computed(() => {
    if (pageInfo.value?.type === 'timetable') return { isSearched: true }
})
const page = computed(() => {
    if (pageInfo.value?.type === 'product') {
        if (pageInfo.value?.data?.type_id == 31) return resolveComponent('PagesAdditional')
        if (pageInfo.value?.data?.type_id == 12) return resolveComponent('PagesIndividualE')
        if (pageInfo.value?.data?.type_id == 11) return resolveComponent('PagesRegularE')
        if (pageInfo.value?.data?.type_id > 20 && pageInfo.value?.data?.type_id < 24) return resolveComponent('PagesTour')
    }
    if (pageInfo.value?.type === 'hotel') return resolveComponent('PagesHotel')
    if (pageInfo.value?.type === 'page' || pageInfo.value?.type === 'timetable') return resolveComponent('PagesCatalog')
    if (pageInfo.value?.type === 'blog') return resolveComponent('PagesBlog')
    return null
})

useSeoMeta({
    title: () => pageInfo.value?.data?.lang_info?.seo_title ?? pageInfo.value?.data?.lang_info?.title ?? '',
    description: () => pageInfo.value?.data?.lang_info?.seo_description ?? pageInfo.value?.data?.lang_info?.description ?? '',
    keywords: () => pageInfo.value?.data?.lang_info?.seo_keywords ?? '',
})
</script>

