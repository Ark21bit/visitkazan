<template>
    <div class="col-span-full h-500px lg:h-760px -mb-5 lg:-mb-7.5">
        <SwiperOne title="Остров-град Свияжск"></SwiperOne>
    </div>
    <div class="col-span-full pt-7.5 lg:pt-15 rounded-3xl z-1 bg-white">
        <ContainerSidebar class="wrapper">
            <div class="flex flex-col gap-15">
                <div class="flex flex-col gap-7.5">
                    <Breadcrumbs class="mb-5 lt-lg:hidden"></Breadcrumbs>
                    <div class="-mb-2.5 flex lt-sm:flex-col gap-5 sm:items-center">
                        <h1 class="font-Nekst text-2xl lg:text-4xl leading-1.1 text-fblack">Остров-град Свияжск</h1>
                        <span class="text-fblack text-lg lg:text-2xl font-semibold leading-1.2">
                            <Icon name="CoinDollar" class="text-fblue text-2xl lg:text-7 mr-2"></Icon>от 2499₽
                        </span>
                    </div>
                    <p class="text-fmain text-sm leading-1.4 max-w-4xl">Увидеть Казань в свете вечерних огней — обязательный пункт путешествия в наш город. В ходе экскурсии вы проедете по центру города с рассказом экскурсовода об истории улиц и памятников и сделаете несколько фотоостановок у самых
                        ярко подсвеченных достопримечательностей. У Центра семьи «Казан» вы узнаете, почему наш город так назван и что за таинственные существа охраняют центральный ЗАГС города, у Дворца земледельцев восхититесь роскошью, торжественностью и величием современного памятника архитектуры,
                        рядом с Театром кукол погрузитесь в атмосферу детской сказки и волшебства. Панорама ночного Казанского Кремля с красавицей мечетью Кул-Шариф и древним Благовещенским собором пополнит вашу серию фотографий тысячелетней Казани.
                        ВНИМАНИЕ! В период новогодних каникул заезд к чаше по возможности (возможно перекрытие дорог в связи с установкой у чаши центральной городской елки)</p>
                    <Button class="w-full lg:w-fit">Заказать экскурсию</Button>
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
</template>

<script setup>

</script>