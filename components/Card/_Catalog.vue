<template>
    <div class="flex flex-col rounded-2.5 lg:rounded-3.75 bg-white overflow-hidden shadow-[0_4px_23px_0] shadow-black/7 ring-2 ring-transparent hover:ring-fblue transition-shadow duration-500 ease-linear">
        <div class="h-204px sm:h-237px lg:h-230px relative">
            <img src="/img.png" alt="" class="w-full h-full object-cover">
            <div class="absolute text-white font-semibold left-5 top-5 px-5 text-base py-1.5 bg-fred rounded-full">SALE</div>
        </div>
        <div class="flex flex-col flex-cal gap-4 p-5 border-b border-fline grow">
            <h3 class="text-fblack text-lg font-semibold leading-1.2 grow line-clamp-3">Гостеприимная обзорная экскурсия</h3>
            <p class="text-sm text-fmain leading-1.4 h-60px line-clamp-3">Загородная автобусная экскурсия на остров-град Свияжск. Дорога до острова занимает примерно 1,5 ...</p>
            <div class="flex gap-2 items-center text-Inputlabel text-sm leading-1.2">
                <Icon name="TimeOclock" class="text-white fill-fblue" size="20"></Icon>
                Длительность:
                <span class="text-fblack font-medium">08:00</span>
            </div>
            <div class="flex gap-2 items-center text-Inputlabel text-sm leading-1.2">
                <Icon name="Star" size="20" class="text-fblue"></Icon>
                Отзывы:
                <span class="text-fblack font-medium">10</span>
            </div>
            <CustomLink to="/" class="lg:mt-1 text-fblack leading-1.2 text-sm underline">Узнать подробнее</CustomLink>
        </div>
        <div class="p-5">
            <Button class="w-full" @click="$emit('order')">Заказать <span class="ml-auto font-Inter text-lg leading-1.4 font-semibold uppercase">1999₽</span></Button>
        </div>
    </div>
</template>
