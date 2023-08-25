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
                    <Tabs>
                        <template #buttonHeader>
                            <Button class="w-full 1340px:w-fit my-auto ml-auto lg:mt-7.5" @click="openModal">Заказать экскурсию</Button>
                        </template>
                        <Tab name="Программа тура" title="Программа тура" class="flex flex-col gap-7.5 lg:gap-7 mt-7.5">
                            <div>
                                <h2 class="text-fblack text-lg leading-1.2 font-Nekst before:w-7px gap-2 before:h-7px before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0">Первый день</h2>
                                <div class="flex flex-col gap-5 lg:gap-4 mt-5">
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Какой нибудь длинный заголовок</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Кремль</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 class="text-fblack text-lg leading-1.2 font-Nekst before:w-7px gap-2 before:h-7px before:rounded-full before:bg-fblue flex items-start before:mt-.5em before:shrink-0">Первый день</h2>
                                <div class="flex flex-col gap-5 lg:gap-4 mt-5">
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Завтрак</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Отель</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Трансфер</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Радиооборудование</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Билеты</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Услуги гида</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Панорамы (фотолокации)</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                    <div class="flex lt-lg:justify-between lt-lg:flex-wrap gap-4 1200px:gap-10 text-sm p-5 lg:p-4 border border-black/5 shadow-[0_4px_43px_0_rgba(0,0,0,.04)] rounded-3.75 items-start">
                                        <p class="lg:w-120px px-3 py-2.25 shrink-0 text-fblack font-medium leading-1.2 text-center bg-gray rounded-8.75">14:00-15:00</p>
                                        <img src="" alt="" class="w-35px h-35px shrink-0">
                                        <p class="w-full lg:flex-[56_1_0] lg:max-w-224px text-fblack font-medium leading-1.4">Время</p>
                                        <p class="w-full lg:flex-[95_1_0] lg:max-w-380px text-fmain leading-1.4">Давно хотела посетить Казань! И вот мы наконец выбрались с семьей) очень благодарны за экскурсию, все прошло великолепно)</p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab name="Стоимость" title="Стоимость" class="flex flex-col gap-7.5 mt-7.5">
                            <p class="max-w-873px text-fmain text-sm leading-1.4 ">
                                Увидеть Казань в свете вечерних огней — обязательный пункт путешествия в наш город. В ходе экскурсии вы проедете по центру города с рассказом экскурсовода об истории улиц и памятников и сделаете несколько фотоостановок у самых ярко подсвеченных достопримечательностей. У
                                Центра семьи «Казан» вы узнаете, почему наш город так назван и что за таинственные существа охраняют центральный ЗАГС города, у Дворца земледельцев восхититесь роскошью, торжественностью и величием современного памятника архитектуры, рядом с Театром кукол погрузитесь в
                                атмосферу детской сказки и волшебства. Панорама ночного Казанского Кремля с красавицей мечетью Кул-Шариф и древним Благовещенским собором пополнит вашу серию фотографий тысячелетней Казани.
                                ВНИМАНИЕ! В период новогодних каникул заезд к чаше по возможности (возможно перекрытие дорог в связи с установкой у чаши центральной городской елки)
                            </p>
                            <Table class="lg:grid-cols-4">
                                <template #head>
                                    <TableTr>
                                        <TableTh>
                                            Отель
                                        </TableTh>
                                        <TableTh>
                                            1-ное размещение
                                        </TableTh>
                                        <TableTh>
                                            2-ное размещение
                                        </TableTh>
                                        <TableTh>
                                            Дополнительное место
                                        </TableTh>
                                    </TableTr>
                                </template>
                                <TableTr>
                                    <TableTd class="flex-col sm:flex-row" data-label="Отель">
                                        <CustomLink class="underline">Название отеля</CustomLink>
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="1-ное размещение">
                                        3999 ₽
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="2-ное размещение">
                                        3999 ₽
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="Дополнительное место">
                                        3999 ₽
                                    </TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd class="flex-col sm:flex-row" data-label="Отель">
                                        <CustomLink class="underline">Название отеля</CustomLink>
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="1-ное размещение">
                                        3999 ₽
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="2-ное размещение">
                                        3999 ₽
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="Дополнительное место">
                                        3999 ₽
                                    </TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd class="flex-col sm:flex-row" data-label="Отель">
                                        <CustomLink class="underline">Название отеля</CustomLink>
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="1-ное размещение">
                                        3999 ₽
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="2-ное размещение">
                                        3999 ₽
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="Дополнительное место">
                                        3999 ₽
                                    </TableTd>
                                </TableTr>
                                <TableTr>
                                    <TableTd class="flex-col sm:flex-row" data-label="Отель">
                                        <CustomLink class="underline">Название отеля</CustomLink>
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="1-ное размещение">
                                        3999 ₽
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="2-ное размещение">
                                        3999 ₽
                                    </TableTd>
                                    <TableTd class="flex-col sm:flex-row" data-label="Дополнительное место">
                                        3999 ₽
                                    </TableTd>
                                </TableTr>
                            </Table>
                        </Tab>
                        <Tab name="Дополнительные услуги" title="Дополнительные услуги" class="flex flex-col mt-7.5">
                            <div class="py-5 flex flex-col gap-4 first:border-t border-b border-fline2" v-for="n in 2">
                                <h3 class="text-fblack text-base font-medium leading-1.4">Аренда оборудования (для лучшей слышимости гида)</h3>
                                <p class="text-sm leading-1.4 text-fmain max-w-900px">Загородная автобусная экскурсия, на которой мы познакомимся с Древним городом Болгар, объектом всемирного наследия ЮНЕСКО.Болгар расположен в 190 км от Казани. Это древняя столица Волжской Булгарии, в которой в 922
                                    г. был принят ислам. Ехать до Болгара будем около трех часов</p>
                                <p class="lg:mt-1 text-lg leading-1.4 text-fblue">100₽</p>
                            </div>
                        </Tab>
                    </Tabs>
                    <Button class="w-full lg:w-fit" @click="openModal">Заказать экскурсию</Button>
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
        <OrderGroupTours></OrderGroupTours>
    </Modal>
</template>

<script setup>
const { closeModal, isModalShow, openModal } = useModal()
</script>