<template>
    <Head>
        <Link rel="apple-touch-icon" sizes="180x180" href="/favicons/180.png" />
        <Link rel="icon" type="image/png" sizes="192x192" href="/favicons/192.png" />
        <Link rel="icon" type="image/png" sizes="96x96" href="/favicons/96.png" />
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicons/32.png" />
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicons/16.png" />
    </Head>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
    <div id="teleported"></div>
    <div class="fixed z-30 right-[var(--width-content-margin)] bottom-7.5 flex flex-col gap-2 text-white group-[.modal-open]/body:pr-4.25 group-[.modal-open.modal-open-mobile]/body:pr-0">
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.telegram" class="flex items-center justify-center aspect-square p-2.5 bg-#2AABEE hover:bg-#249CDB transition-colors duration-500 ease-linear rounded-full">
            <Icon size="24" name="icon-park-outline:telegram"></Icon>
        </CustomLink>
        <CustomLink target="_blank" :to="generalConfig?.static_info?.contact?.socials?.whatsApp" class="flex items-center justify-center aspect-square p-2.5 bg-#60D669 hover:bg-#4CC655 transition-colors duration-500 ease-linear rounded-full">
            <Icon size="24" name="ic:outline-whatsapp"></Icon>
        </CustomLink>
        <NuxtLink target="_blank" :to="phoneLinkReplace(generalConfig?.static_info?.contact?.telephones[0])" class="flex items-center justify-center aspect-square p-2.5 bg-#2AABEE hover:bg-#0C98B5 transition-colors duration-500 ease-linear rounded-full">
            <Icon size="24" name="Phone"></Icon>
        </NuxtLink>
    </div>
    <CustomLoadingIndicator :is-show="loadingShow" />
    <Toasts></Toasts>
</template>

<script setup>
const { generalConfig } = storeToRefs(useGeneralConfigStore())

const config = inject(Symbol.for('FormKitConfig'))

const { locale } = useI18n()
watch(locale, (newValue) => {
    config.locale = newValue
}, { immediate: true })

const loadingShow = ref(true)

onMounted(() => {
    loadingShow.value = false
    useState('scrollWidh').value = getScrollWidth()
})

useHead({
    htmlAttrs: {
        lang: () => locale.value,
    },
    bodyAttrs: {
        class: 'group/body'
    }
})
</script>
