<template>
    <header v-bind="$attrs" class="grid-container py-4 lg:py-5 z-20">
        <div class="flex lt-lg:flex-col gap-5 lg:gap-3 lg:justify-between lg:items-center py-2.5 lg:py-3.25 px-4 sm:px-5 bg-white rounded-3.75 shadow-[0_4px_34px_0_rgba(0,0,0,.05)]">
            <div class="flex justify-between items-center">
                <NuxtLinkLocale to="/" class="shrink-0"><img src="/logo.png" alt="" class="w-116px lg:w-140px lg:h-43px h-35px"></NuxtLinkLocale>
                <button :class="isMobileMenuShow ? 'h-3.5' : 'h-3.5'" @click="menuToggle" class="lg:hidden flex flex-col justify-between w-26px transition-height ease-linear duration-100">
                    <span :class="{ '-rotate-45': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-right transition-transform ease-linear duration-500" />
                    <span :class="{ 'opacity-0': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 transition-opacity ease-linear duration-500" />
                    <span :class="{ 'rotate-45': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-right transition-transform ease-linear duration-500" />
                </button>
            </div>
            <div class="flex-col gap-7.5 lg:contents -mx-4 sm:-mx-5 border-fline2 border-t" :class="isMobileMenuShow ? 'flex' : 'hidden'">
                <nav class="lg:hidden flex flex-col">
                    <Dropdown title="Экскурсии" class="py-4 px-5 border-b border-fline2">
                        <div class="flex flex-col mt-5 gap-4">
                            <NuxtLinkLocale to="/test" class="">Регулярные</NuxtLinkLocale>
                            <NuxtLinkLocale to="/test" class="">Сборные</NuxtLinkLocale>
                        </div>
                    </Dropdown>
                    <Dropdown title="Туры" class="py-4 px-5 border-b border-fline2">
                        <div class="flex flex-col mt-5 gap-4">
                            <NuxtLinkLocale to="/test" class="">Регулярные</NuxtLinkLocale>
                            <NuxtLinkLocale to="/test" class="">Сборные</NuxtLinkLocale>
                        </div>
                    </Dropdown>
                    <NuxtLinkLocale to="/test" class="py-4 border-b border-fline2 px-5">Дополнительно</NuxtLinkLocale>
                    <NuxtLinkLocale to="/test" class="py-4 border-b border-fline2 px-5">О нас</NuxtLinkLocale>
                    <NuxtLinkLocale to="/test" class="py-4 border-b border-fline2 px-5">Контакты</NuxtLinkLocale>
                </nav>
                <nav class="lt-lg:hidden flex gap-7.5 text-sm leading-1.2 text-fblack">
                    <DropdownHover title="Экскурсии">
                        <NuxtLinkLocale to="/test" class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear">Регулярные</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test" class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear">Сборные</NuxtLinkLocale>
                    </DropdownHover>
                    <DropdownHover title="Туры">
                        <NuxtLinkLocale to="/test" class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear">Регулярные</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test" class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear">Сборные</NuxtLinkLocale>
                    </DropdownHover>
                    <NuxtLinkLocale to="/test">Дополнительно</NuxtLinkLocale>
                    <NuxtLinkLocale to="/test">О нас</NuxtLinkLocale>
                    <NuxtLinkLocale to="/test">Контакты</NuxtLinkLocale>
                </nav>
                <div class="flex gap-2.5 mx-5 lg:mx-0 text-inactive font-medium leading-1.2 uppercase text-sm">
                    <NuxtLink :to="switchLocalePath('ru')" class="text-fblack">Ру</NuxtLink>
                    <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
                </div>
                <div class="flex gap-7 sm:gap-7.5 lg:gap-12.5 lt-lg:flex-col mx-5 lg:mx-0">
                    <div class="flex flex-col gap-5 lg:gap-2 text-3.25 leading-1.2 font-bold text-fblack">
                        <div class="flex items-center">
                            <Icon class="mr-1 text-fblue text-lg" name="Phone"></Icon>
                            <NuxtLinkLocale to="/test">8(800)201-42-64</NuxtLinkLocale>
                        </div>
                        <div class="flex items-center">
                            <Icon class="mr-1 text-white text-lg fill-fblue" name="Mail"></Icon>
                            <NuxtLinkLocale to="/test">welcome@pgrata16.ru</NuxtLinkLocale>
                        </div>
                    </div>
                    <Button class="lt-lg:w-full lt-lg:mb-2.5" size="sm">Связаться с нами</Button>
                </div>
            </div>
        </div>
    </header>
    <div class="fixed inset-0 bg-black/50 z-10 lg:hidden" @click.self="menuOpen" :class="{ 'hidden': !isMobileMenuShow }">

    </div>
</template>

<script setup>
defineOptions({
    inheritAttrs: false
})
const switchLocalePath = useSwitchLocalePath()

const isMobileMenuShow = ref(false)

const menuOpen = () => {
    isMobileMenuShow.value = true
}

const menuToggle = () => {
    isMobileMenuShow.value = !isMobileMenuShow.value
}
</script>
