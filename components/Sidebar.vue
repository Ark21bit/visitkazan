<template>
    <div class="shadow-sidebar bg-white rounded-3.75 border border-black/5">
        <div class="flex items-center gap-2 justify-between px-4 lg:px-5 py-5 text-fblack">
            <p class="text-base uppercase font-medium leading-1.2">меню</p>
            <button :class="isShow ? 'h-5' : 'h-3.5'" @click="isShow = !isShow" class="lg:hidden flex flex-col justify-between w-26px transition-height ease-linear duration-100">
                <span :class="{ '-rotate-45': isShow }" class="w-full h-0.5 bg-fblack rounded-.25 0origin-right transition-transform ease-linear duration-500" />
                <span :class="{ 'opacity-0': isShow }" class="w-full h-0.5 bg-fblack rounded-.25 transition-opacity ease-linear duration-500" />
                <span :class="{ 'rotate-45': isShow }" class="w-full h-0.5 bg-fblack rounded-.25 origin-right transition-transform ease-linear duration-500" />
            </button>
        </div>
        <div class="flex-col gap-5 py-5 border-t border-fline2" :class="isShow ? 'flex' : 'lt-lg:hidden lg:flex'">
            <Dropdown class="px-5 text-fblack font-medium text-base leading-1.2" title="Экскурсии">
                <ul class="flex flex-col mt-5 gap-4 pb-5">
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Казань</NuxtLinkLocale>
                    </li>
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Татарстан</NuxtLinkLocale>
                    </li>
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Обзорные</NuxtLinkLocale>
                    </li>
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Автобусные</NuxtLinkLocale>
                    </li>
                </ul>
            </Dropdown>
            <Dropdown class="px-5 text-fblack font-medium text-base leading-1.2" title="Туры">
                <ul class="flex flex-col mt-5 gap-4 pb-5">
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Казань</NuxtLinkLocale>
                    </li>
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Татарстан</NuxtLinkLocale>
                    </li>
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Обзорные</NuxtLinkLocale>
                    </li>
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Автобусные</NuxtLinkLocale>
                    </li>
                </ul>
            </Dropdown>
            <Dropdown class="px-5 text-fblack font-medium text-base leading-1.2" title="Услуги">
                <ul class="flex flex-col mt-5 gap-4 pb-5">
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Казань</NuxtLinkLocale>
                    </li>
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Татарстан</NuxtLinkLocale>
                    </li>
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Обзорные</NuxtLinkLocale>
                    </li>
                    <li class="before:w-1.5 before:h-1.5 before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0 gap-2.5">
                        <NuxtLinkLocale to="/test" class="text-fblack font-medium text-base leading-1.2">Автобусные</NuxtLinkLocale>
                    </li>
                </ul>
            </Dropdown>
            <NuxtLinkLocale to="/test" class="px-5 text-fblack font-medium text-base leading-1.2">Индивидуальные экскурсии</NuxtLinkLocale>
            <NuxtLinkLocale to="/test" class="px-5 text-fblack font-medium text-base leading-1.2">Контакты</NuxtLinkLocale>
        </div>
    </div>
</template>

<script setup>
const isShow = ref(false)
</script>