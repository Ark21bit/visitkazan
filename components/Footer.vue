<template>
    <footer class="grid-container pt-7.5 lg:pt-12.5 rounded-t-5 lg:rounded-t-7.5 bg-footer text-white z-1">
        <div class="flex flex-col lg:flex-row lg:gap-7.5 lg:pb-7.5 lt-lg:col-span-full">
            <div class="grid lg:grid-cols-2 grid-rows-[1fr_auto] lg:gap-7.5 lg:gap-y-5 flex-1">
                <div class="flex lt-lg:px-[var(--width-content-margin)] lt-lg:flex-wrap lt-lg:items-start lg:flex-col gap-5 lt-lg:border-b border-footer2 lt-lg:pb-5">
                    <div><img src="/logo2.png" alt="" class="lg:w-155px lg:h-78px h-43px w-85px"></div>
                    <p class="lt-lg:order-3 w-full lg:max-w-276px text-xs lg:text-sm leading-1.4">Персона Грата – 20 лет на рынке туризма! Будем рады стать Вашим надежным партнером и другом!</p>
                    <NuxtLinkLocale to="/test" class="lt-lg:ml-auto p-1.5 lg:mt-auto bg-white rounded-1.25 w-fit flex">
                        <Icon name="Ig" class="text-lg text-fblue"></Icon>
                    </NuxtLinkLocale>
                </div>
                <div class="lt-lg:hidden">
                    <h3 class="font-Nekst text-xl font-semibold leading-1.1 pb-5 border-b border-footer2">Наши услуги</h3>
                    <div class="flex flex-col gap-4 text-base leading-1.4 mt-5">
                        <NuxtLinkLocale to="/test">Экскурсии</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test">Туры</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test">Трансферы</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test">Отели</NuxtLinkLocale>
                    </div>
                </div>
                <div class="lt-lg:px-[var(--width-content-margin)] col-span-full flex flex-col gap-y-4.5 sm:gap-y-5 lg:gap-y-2.5 flex-wrap lt-lg:border-b border-footer2 lt-lg:py-5">
                    <div class="flex lt-sm:flex-col gap-x-7.5 lg:gap-x-5 gap-y-4.5 text-3.25">
                        <NuxtLinkLocale to="/test" class="flex items-center">
                            <Icon name="Phone" class="mr-1 text-fblue" size="18"></Icon>8(800)201-42-64
                        </NuxtLinkLocale>
                        <NuxtLinkLocale to="/test" class="flex items-center">
                            <Icon name="Phone" class="mr-1 text-fblue" size="18"></Icon>8(843)299-43-40
                        </NuxtLinkLocale>
                    </div>
                    <div class="flex lt-sm:flex-col gap-x-5 gap-y-4.5 text-3.25">
                        <NuxtLinkLocale to="/test" class="flex items-center">
                            <Icon name="Mail" class="mr-1 text-footer fill-fblue" size="18"></Icon>vizitkzn@pgrata16.ru
                        </NuxtLinkLocale>
                        <NuxtLinkLocale to="/test" class="flex items-center">
                            <Icon name="Mail" class="mr-1 text-footer fill-fblue" size="18"></Icon>vizitkzn@pgrata16.ru
                        </NuxtLinkLocale>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 gap-7.5 flex-1">
                <div class="lt-lg:hidden">
                    <h3 class="font-Nekst text-xl font-semibold leading-1.1 pb-5 border-b border-footer2">Туры</h3>
                    <div class="flex flex-col gap-4 text-base leading-1.4 mt-5">
                        <NuxtLinkLocale to="/test">2 дня 1 ночь</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test">3 дня 2 ночи</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test">4 дня 3 ночи</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test">5 дней 4 ночи</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test">6 дней 5 ночей</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test">Дневные программы</NuxtLinkLocale>
                        <NuxtLinkLocale to="/test">Иные</NuxtLinkLocale>
                    </div>
                </div>
                <div class="lt-lg:px-[var(--width-content-margin)] flex flex-col lt-lg:py-5 lt-lg:border-b border-footer2">
                    <h3 class="font-Nekst text-lg lg:text-xl font-semibold leading-1.1 lg:pb-5 lg:border-b border-footer2">Заказать сейчас</h3>
                    <div class="text-base leading-1.4 mt-5 flex flex-col gap-5 grow">
                        <p class="text-sm">Мы ответим на любые ваши вопросы!</p>
                        <Button class="w-full sm:w-226px lg:w-fit">Задать вопрос</Button>
                        <div class="flex items-center gap-5 mt-auto lt-lg:hidden">
                            <img src="/icons/visa.svg" alt="">
                            <img src="/icons/mastercard.svg" alt="">
                            <img src="/icons/mir.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 flex flex-col sm:flex-row gap-4 justify-between text-sm leading-1.4 lg:border-t border-footer2">
            <p>© VisitKazan 2010-2023</p>
            <p>Политика конфиденциальности</p>
            <div class="sm:hidden flex items-center gap-3 mt-1">
                <img class="w-39px h-12px" src="/icons/visa.svg" alt="">
                <img class="w-24px h-19px" src="/icons/mastercard.svg" alt="">
                <img class="w-45px h-13px" src="/icons/mir.svg" alt="">
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>