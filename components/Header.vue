<template>
    <header v-bind="$attrs" class="grid-container py-4 lg:py-5 z-20">
        <div class="flex max-lg:flex-col gap-5 lg:gap-3 lg:justify-between lg:items-center py-2.5 lg:py-3.25 px-4 sm:px-5 bg-white rounded-3.75 shadow-[0_4px_34px_0_rgba(0,0,0,.05)]">
            <div class="flex justify-between items-center">
                <CustomLink to="/" class="shrink-0"><img src="/imgs/logo.png" alt="" class="w-116px lg:w-140px lg:h-43px h-35px"></CustomLink>
                <button @click="menuToggle" class="lg:hidden h-3.5 flex flex-col justify-between items-end w-6.5">
                    <span :class="{ '-rotate-45 -translate-y-0.75': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-right transition-transform ease-linear duration-300" />
                    <span :class="isMobileMenuShow ? 'opacity-0 w-0' : 'w-full'" class="h-0.5 bg-fblack rounded-.25 transition-width,opacity ease-linear duration-300" />
                    <span :class="{ 'rotate-45 translate-y-0.75': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-right transition-transform ease-linear duration-300" />
                </button>
            </div>
            <div class="flex-col gap-7.5 lg:contents -mx-4 sm:-mx-5 border-fline2 border-t" :class="isMobileMenuShow ? 'flex' : 'hidden'">
                <nav class="lg:hidden flex flex-col">
                    <template v-for="link in generalConfig?.static_info?.menu?.header">
                        <Dropdown v-if="link?.children?.length > 0" class="py-4 px-5 border-b border-fline2">
                            <template #dropdown-header-content>
                                <CustomLink :to="link?.slug" class="text-base font-medium leading-1.2">{{ link?.title }}</CustomLink>
                            </template>
                            <div class="flex flex-col mt-5 gap-4">
                                <CustomLink v-for="children in link?.children" :to="children?.slug" class="">{{ children?.title }}</CustomLink>
                            </div>
                        </Dropdown>
                        <CustomLink v-else :to="link?.slug" class="py-4 border-b border-fline2 px-5">{{ link?.title }}</CustomLink>
                    </template>
                </nav>
                <nav class="max-lg:hidden flex gap-7.5 text-sm leading-1.2 text-fblack">
                    <template v-for="link in generalConfig?.static_info?.menu?.header">
                        <DropdownHover v-if="link?.children?.length > 0">
                            <template #title>
                                <CustomLink :to="link?.slug">{{ link?.title }}</CustomLink>
                            </template>
                            <CustomLink v-for="children in link?.children" :to="children?.slug" class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear">{{ children?.title }}</CustomLink>
                        </DropdownHover>
                        <CustomLink v-else :to="link?.slug">{{ link?.title }}</CustomLink>
                    </template>
                </nav>
                <div class="flex gap-2.5 mx-5 lg:mx-0 text-inactive font-medium leading-1.2 uppercase text-sm">
                    <NuxtLink v-for="(item, key) in generalConfig?.locales" :to="switchLocalePath(key)" :class="{ 'text-fblack': locale == key }">{{ item?.slice(0, 2) }}</NuxtLink>
                </div>
                <div class="flex gap-7 sm:gap-7.5 lg:gap-12.5 max-lg:flex-col mx-5 lg:mx-0">
                    <div class="flex flex-col gap-5 lg:gap-2 text-3.25 leading-1.2 font-bold text-fblack">
                        <div class="flex items-center">
                            <Icon class="mr-1 text-fblue text-lg" name="Phone"></Icon>
                            <NuxtLink :to="phoneLinkReplace(generalConfig?.static_info?.contact?.telephones?.[0])">{{ generalConfig?.static_info?.contact?.telephones?.[0] }}</NuxtLink>
                        </div>
                        <div class="flex items-center">
                            <Icon class="mr-1 text-white text-lg fill-fblue" name="Mail"></Icon>
                            <NuxtLink :to="`mailto:${generalConfig?.static_info?.contact?.emails?.[0]}`">{{ generalConfig?.static_info?.contact?.emails?.[0] }}</NuxtLink>
                        </div>
                    </div>
                    <ModalCallback #="{ openModal }">
                        <Button @click="openModal" class="max-lg:w-full max-lg:mb-2.5 lg:p-3" size="sm">
                            <span class="lg:hidden">{{ generalConfig?.static_info?.global_words?.request_call }}</span>
                            <span class="max-lg:hidden"><Icon name="Phone" class="text-2xl"></Icon></span>
                        </Button>
                    </ModalCallback>
                </div>
            </div>
        </div>
    </header>
    <div class="fixed inset-0 bg-black/50 z-10 lg:hidden" @click.self="menuClose" :class="{ 'hidden': !isMobileMenuShow }"></div>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})

const { locale } = useI18n()

const { generalConfig } = storeToRefs(useGeneralConfigStore())

const switchLocalePath = useSwitchLocalePath()

const isMobileMenuShow = ref(false)
const menuClose = () => isMobileMenuShow.value = false
const menuToggle = () => isMobileMenuShow.value = !isMobileMenuShow.value

useNuxtApp().hook('page:start', () => menuClose())
</script>
