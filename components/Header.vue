<template>
    <header v-bind="$attrs" class="grid-container py-4 lg:py-5 z-20">
        <div class="flex lt-lg:flex-col gap-5 lg:gap-3 lg:justify-between lg:items-center py-2.5 lg:py-3.25 px-4 sm:px-5 bg-white rounded-3.75 shadow-[0_4px_34px_0] shadow-black/5">
            <div class="flex justify-between items-center">
                <CustomLink to="/" class="shrink-0"><img src="/logo.png" alt="" class="w-116px lg:w-140px lg:h-43px h-35px"></CustomLink>
                <button :class="isMobileMenuShow ? 'h-5' : 'h-3.5'" @click="menuToggle" class="lg:hidden flex flex-col justify-between w-26px transition-height ease-linear duration-100">
                    <span :class="{ 'rotate-45': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-[0] transition-transform ease-linear duration-500" />
                    <span :class="{ 'opacity-0': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 transition-opacity ease-linear duration-500" />
                    <span :class="{ '-rotate-45': isMobileMenuShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-[0] transition-transform ease-linear duration-500" />
                </button>
            </div>
            <div class="flex-col gap-7.5 lg:contents -mx-5 border-fline2 border-t" :class="isMobileMenuShow ? 'flex' : 'hidden'">
                <nav class="lg:hidden flex flex-col">
                    <Dropdown title="Экскурсии" class="py-4 px-5 border-b border-fline2">
                        <div class="flex flex-col mt-5 gap-4">
                            <CustomLink class="" to="/test">Регулярные</CustomLink>
                            <CustomLink class="" to="/test">Сборные</CustomLink>
                        </div>
                    </Dropdown>
                    <Dropdown title="Туры" class="py-4 px-5 border-b border-fline2">
                        <div class="flex flex-col mt-5 gap-4">
                            <CustomLink class="" to="/test">Регулярные</CustomLink>
                            <CustomLink class="" to="/test">Сборные</CustomLink>
                        </div>
                    </Dropdown>
                    <CustomLink class="py-4 border-b border-fline2 px-5">Дополнительно</CustomLink>
                    <CustomLink class="py-4 border-b border-fline2 px-5">О нас</CustomLink>
                    <CustomLink class="py-4 border-b border-fline2 px-5">Контакты</CustomLink>
                </nav>
                <nav class="lt-lg:hidden flex gap-7.5 text-sm leading-1.2 text-fblack">
                    <DropdownHover title="Экскурсии">
                        <CustomLink class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear" to="/test">Регулярные</CustomLink>
                        <CustomLink class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear" to="/test">Сборные</CustomLink>
                    </DropdownHover>
                    <DropdownHover title="Туры">
                        <CustomLink class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear" to="/test">Регулярные</CustomLink>
                        <CustomLink class="flex px-3.5 py-2.5 bg-white hover:bg-fblue text-fblack hover:text-white transition-colors duration-500 ease-linear" to="/test">Сборные</CustomLink>
                    </DropdownHover>
                    <CustomLink>Дополнительно</CustomLink>
                    <CustomLink>О нас</CustomLink>
                    <CustomLink>Контакты</CustomLink>
                </nav>
                <div class="flex gap-2.5 mx-5 lg:mx-0 text-inactive font-medium leading-1.2 uppercase text-sm">
                    <span class="text-fblack">Ру</span>
                    <span>EN</span>
                </div>
                <div class="flex gap-7 sm:gap-7.5 lg:gap-12.5 lt-lg:flex-col mx-5 lg:mx-0">
                    <div class="flex flex-col gap-5 lg:gap-2 text-3.25 leading-1.2 font-bold text-fblack">
                        <div class="flex items-center">
                            <Icon class="mr-1 text-fblue text-lg" name="Phone"></Icon>
                            <CustomLink>8(800)201-42-64</CustomLink>
                        </div>
                        <div class="flex items-center">
                            <Icon class="mr-1 text-white text-lg fill-fblue" name="Mail"></Icon>
                            <CustomLink>welcome@pgrata16.ru</CustomLink>
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
const isMobileMenuShow = ref(false)

const menuOpen = () => {
    isMobileMenuShow.value = true
}

const menuToggle = () => {
    isMobileMenuShow.value = !isMobileMenuShow.value
}
</script>
