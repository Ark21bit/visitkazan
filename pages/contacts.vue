<template>
    <h1 class="text-2xl lg:text-4xl leading-1.1 text-fblack font-Nekst lt-lg:max-w-290px">Контактная информация</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-7.5 mt-7.5 lg:mt-12.5">
        <div>
            <h3 class="font-Nekst text-fblack text-lg font-semibold leading-1.2">Адрес</h3>
            <div class="mt-4 lg:mt-5 pt-4 lg:pt-5 gap-2 border-t border-fline3 flex flex-col">
                <p class="text-sm leading-1.4 font-medium text-black2">г. Казань улица Маяковского 24А</p>
            </div>
        </div>
        <div>
            <h3 class="font-Nekst text-fblack text-lg font-semibold leading-1.2">Телефоны</h3>
            <div class="mt-4 lg:mt-5 pt-4 lg:pt-5 gap-2 border-t border-fline3 flex flex-col">
                <CustomLink to="/test" class="text-sm leading-1.4 font-medium text-fblue w-fit">8 (800)-201-42-64</CustomLink>
                <CustomLink to="/test" class="text-sm leading-1.4 font-medium text-fblue w-fit">8 (843)-299-42-64</CustomLink>
                <CustomLink to="/test" class="text-sm leading-1.4 font-medium text-fblue w-fit">8 (843)-299-43-40</CustomLink>
                <CustomLink to="/test" class="text-sm leading-1.4 font-medium text-fblue w-fit">8 (962)-558-35-19</CustomLink>
            </div>
        </div>
        <div>
            <h3 class="font-Nekst text-fblack text-lg font-semibold leading-1.2">Почта</h3>
            <div class="mt-4 lg:mt-5 pt-4 lg:pt-5 gap-2 border-t border-fline3 flex flex-col">
                <CustomLink to="/test" class="text-sm leading-1.4 font-medium text-fblue w-fit">welcome@pgrata16.ru</CustomLink>
                <CustomLink to="/test" class="text-sm leading-1.4 font-medium text-fblue w-fit">grouptour@pgrata16.ru</CustomLink>
                <CustomLink to="/test" class="text-sm leading-1.4 font-medium text-fblue w-fit">tour@pgrata16.ru</CustomLink>
                <CustomLink to="/test" class="text-sm leading-1.4 font-medium text-fblue w-fit">vizitkzn@pgrata16.ru</CustomLink>
            </div>
        </div>
        <div>
            <h3 class="font-Nekst text-fblack text-lg font-semibold leading-1.2">График работы</h3>
            <div class="mt-4 lg:mt-5 pt-4 lg:pt-5 gap-2 border-t border-fline3 flex flex-col">
                <div class="text-fmain text-sm leading-1.4 flex flex-col gap-2">
                    <div class="flex gap-2">
                        <p>Пн - Пт</p>
                        <p class="ml-auto text-fblack">9:00 - 18:00</p>
                    </div>
                    <div class="flex gap-2">
                        <p>Суббота</p>
                        <p class="ml-auto text-fblack">Закрыто</p>
                    </div>
                    <div class="flex gap-2">
                        <p>Воскресенье</p>
                        <p class="ml-auto text-fblack">Закрыто</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Feedback class="mt-15 lg:mt-12.5"></Feedback>
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
</script>
