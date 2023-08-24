<template>
    <div class="col-span-full h-500px lg:h-760px -mb-5 lg:-mb-7.5">
        <SwiperOne title="Остров-град Свияжск"></SwiperOne>
    </div>
    <div class="col-span-full pt-7.5 lg:pt-15 rounded-3xl z-1 bg-white">
        <ContainerSidebar class="wrapper">
            <div class="flex flex-col gap-15">
                <div class="flex flex-col gap-7.5">
                    <Breadcrumbs class="mb-5 lt-lg:hidden"></Breadcrumbs>
                    <h1 class="font-Nekst text-2xl lg:text-4xl leading-1.1 lg:leading-1.1 text-fblack -mb-2.5">Остров-град Свияжск</h1>
                    <p class="text-fmain text-sm leading-1.4 max-w-4xl">Увидеть Казань в свете вечерних огней — обязательный пункт путешествия в наш город. В ходе экскурсии вы проедете по центру города с рассказом экскурсовода об истории улиц и памятников и сделаете несколько фотоостановок у самых
                        ярко подсвеченных достопримечательностей. У Центра семьи «Казан» вы узнаете, почему наш город так назван и что за таинственные существа охраняют центральный ЗАГС города, у Дворца земледельцев восхититесь роскошью, торжественностью и величием современного памятника архитектуры,
                        рядом с Театром кукол погрузитесь в атмосферу детской сказки и волшебства. Панорама ночного Казанского Кремля с красавицей мечетью Кул-Шариф и древним Благовещенским собором пополнит вашу серию фотографий тысячелетней Казани.
                        ВНИМАНИЕ! В период новогодних каникул заезд к чаше по возможности (возможно перекрытие дорог в связи с установкой у чаши центральной городской елки)
                    </p>
                    <Button class="w-full lg:w-fit" @click="openModal">Заказать экскурсию</Button>
                </div>
                <div>
<<<<<<< HEAD
                    <h2 class="font-Nekst text-xl lg:text-2xl lg:leading-1.1 leading-1.1 text-fblack">Общее описание</h2>
                    <div class="border-t border-fline2 mt-8 sm:mt-6 lg:mt-7.5">
                        <div class="border-b border-fline2 py-4 flex lt-sm:flex-col sm:items-center justify-between gap-2.5">
                            <p class="text-sm lg:text-base text-fblack leading-1.4">
=======
                    <h2 class="font-Nekst text-xl lg:text-2xl lg:leading-[1.1] leading-[1.1] text-fblack">Общее описание</h2>
                    <div class="border-t border-fline2 mt-8 sm:mt-6 lg:mt-7.5">
                        <div class="border-b border-fline2 py-4 flex max-sm:flex-col sm:items-center justify-between gap-2.5">
                            <p class="text-sm lg:text-base text-fblack leading-[1.4]">
>>>>>>> deef4cf (fix)
                                <Icon name="Calendar" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue"></Icon>Ближайшая дата
                            </p>
                            <p class="text-sm lg:text-base text-fblack leading-1.4 font-medium">25 февраля</p>
                        </div>
                        <div class="border-b border-fline2 py-4 flex lt-sm:flex-col sm:items-center justify-between gap-2.5">
                            <p class="text-sm lg:text-base text-fblack leading-1.4">
                                <Icon name="CoinDollar" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue"></Icon>Стоимость
                            </p>
                            <p class="text-sm lg:text-base text-fblack leading-1.4 font-medium">2499₽</p>
                        </div>
                        <div class="border-b border-fline2 py-4 flex lt-sm:flex-col sm:items-center justify-between gap-2.5">
                            <p class="text-sm lg:text-base text-fblack leading-1.4">
                                <Icon name="TimeOclock" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue fill-fblue/30"></Icon>Длительность
                            </p>
                            <p class="text-sm lg:text-base text-fblack leading-1.4 font-medium">10 ч. 00 мин</p>
                        </div>
                        <div class="border-b border-fline2 py-4 flex lt-sm:flex-col sm:items-center justify-between gap-2.5">
                            <p class="text-sm lg:text-base text-fblack leading-1.4">
                                <Icon name="Location" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue"></Icon>Отправление
                            </p>
                            <div class="flex lt-sm:flex-col gap-3 sm:gap-5 lg:gap-7.5">
                                <p class="text-sm lg:text-base text-fblack leading-1.4 font-medium">ул. Московская,2;</p>
                                <p class="text-sm lg:text-base text-fblack leading-1.4 font-medium">ул. Пушкина. 4;</p>
                                <p class="text-sm lg:text-base text-fblack leading-1.4 font-medium">ул. Петербургская;</p>
                            </div>
                        </div>
                        <div class="border-b border-fline2 py-4 flex lt-sm:flex-col sm:items-center justify-between gap-2.5">
                            <p class="text-sm lg:text-base text-fblack leading-1.4">
                                <Icon name="Signpost" class="text-2xl mr-2.5 lg:mr-3.5 text-fblue"></Icon>Вид экскурсии
                            </p>
                            <p class="text-sm lg:text-base text-fblack leading-1.4 font-medium">Пешеходная</p>
                        </div>
                    </div>
                </div>
                <div class="contents lg:flex gap-7 justify-between">
                    <div class="flex flex-col gap-7.5 flex-1 grow">
                        <h2 class="font-Nekst text-xl lg:text-2xl lg:leading-1.1 leading-1.1 text-fblack">В стоимость входит</h2>
                        <ul class="flex flex-col gap-5 leading-1.2 font-medium text-black2 text-base">
                            <li class="before:w-2 before:h-2 before:rounded-full before:bg-fblue flex items-start  before:-translate-y-1/3 before:mt-.5em before:shrink-0 gap-2">
                                Транспортные услуги
                            </li>
                            <li class="before:w-2 before:h-2 before:rounded-full before:bg-fblue flex items-start  before:-translate-y-1/3 before:mt-.5em before:shrink-0 gap-2">
                                Входной билет на территорию Болгарского музея-заповедник
                            </li>
                            <li class="before:w-2 before:h-2 before:rounded-full before:bg-fblue flex items-start  before:-translate-y-1/3 before:mt-.5em before:shrink-0 gap-2">
                                Входной билет в музей «Дом Лекаря»
                            </li>
                            <li class="before:w-2 before:h-2 before:rounded-full before:bg-fblue flex items-start  before:-translate-y-1/3 before:mt-.5em before:shrink-0 gap-2">
                                Услуги экскурсовода
                            </li>
                            <li class="before:w-2 before:h-2 before:rounded-full before:bg-fblue flex items-start  before:-translate-y-1/3 before:mt-.5em before:shrink-0 gap-2">
                                Входной билет в Памятный знак
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-7.5 flex-1 lg:max-w-306px">
                        <h2 class="font-Nekst text-xl lg:text-2xl leading-1.1 text-fblack">Все цены</h2>
                        <p class="lg:-mt-2.5 text-fmain text-sm leading-1.4">Дети до 7 лет обслуживаются бесплатно</p>
                        <div class="flex flex-col border-t border-fline2">
                            <div class="flex justify-between gap-2 border-b border-fline2 py-4 text-fblack text-base leading-1.4">
                                <p>Взрослый</p>
                                <p class="font-medium">2499₽</p>
                            </div>
                            <div class="flex justify-between gap-2 border-b border-fline2 py-4 text-fblack text-base leading-1.4">
                                <p>Взрослый</p>
                                <p class="font-medium">2499₽</p>
                            </div>
                            <div class="flex justify-between gap-2 border-b border-fline2 py-4 text-fblack text-base leading-1.4">
                                <p>Взрослый</p>
                                <p class="font-medium">2499₽</p>
                            </div>
                            <div class="flex justify-between gap-2 border-b border-fline2 py-4 text-fblack text-base leading-1.4">
                                <p>Взрослый</p>
                                <p class="font-medium">2499₽</p>
                            </div>
                        </div>
                    </div>
                </div>
                <seo-block class="lt-lg:hidden"></seo-block>
                <Reviews></Reviews>
            </div>
        </ContainerSidebar>
    </div>
    <div class="lt-lg:hidden mt-15 col-span-full overflow-hidden">
        <SwiperExcursions class="wrapper border-t border-fline2 pt-5"></SwiperExcursions>
    </div>
    <Recommendations class="mt-20 lg:mt-37.5" />
    <Modal @close="closeModal" :is-show="isModalShow">
        <OrderRegularExcursions></OrderRegularExcursions>
    </Modal>
</template>

<script setup>
const { closeModal, isModalShow, openModal } = useModal()
</script>